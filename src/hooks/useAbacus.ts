import React, { useCallback } from 'react';
import useSound from 'use-sound';
import { useDispatch } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';

import abacusBeadSound from '../assets/media/abacus.mp3';
import { getOrderNumberFromList } from '../utils';
import { moveBead, toggleTopBead } from '../store/abacusSlice';

const useAbacus = (): {
    onAbacusClick: React.MouseEventHandler<HTMLDivElement>;
} => {
    const [playSound] = useSound(abacusBeadSound);

    const dispatch = useDispatch();

    const onAbacusClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            const target = event.target as HTMLElement;
            const { parentElement } = target;
            if (!target.classList.contains('bead') || !parentElement) return;
            const abacusNode = event.currentTarget;

            const currentRow = target.closest('.abacus__row');
            if (!currentRow) return;
            const rowIndex = getOrderNumberFromList(
                abacusNode.children,
                currentRow
            );

            const moveBeadsInList = (sourceIndex: number) => {
                const beadIndex = getOrderNumberFromList(
                    parentElement.children,
                    target
                );
                return moveBead({ rowIndex, sourceIndex, beadIndex });
            };

            const clickHandlers: { [key: string]: () => AnyAction } = {
                list_upper: () => moveBeadsInList(0),

                list_lower: () => moveBeadsInList(1),

                abacus__section_upper: () => toggleTopBead(rowIndex)
            };

            const parentClassName = Object.keys(clickHandlers).find(className =>
                parentElement.classList.contains(className)
            );

            if (parentClassName) {
                const handler = clickHandlers[parentClassName];

                if (handler) {
                    dispatch(handler());
                    playSound();
                }
            }
        },
        [playSound, dispatch]
    );

    return { onAbacusClick };
};

export default useAbacus;
