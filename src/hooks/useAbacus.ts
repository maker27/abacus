import React, { useCallback } from 'react';
import useSound from 'use-sound';

import abacusBeadSound from '../assets/media/abacus.mp3';
import { TSetState } from '../types/components';
import { AbacusRowRecord, BeadsRecords } from '../types/abacus';
import { getOrderNumberFromList } from '../utils';

const useAbacus = (
    setRows: TSetState<AbacusRowRecord[]>
): { onAbacusClick: React.MouseEventHandler<HTMLDivElement> } => {
    const [playSound] = useSound(abacusBeadSound);

    const changeRow = useCallback(
        (
            rowIndex: number,
            callback: (row: AbacusRowRecord) => AbacusRowRecord
        ) => {
            setRows(prevRows => {
                return prevRows.map((row, i) => {
                    if (rowIndex === i + 1) {
                        return callback(row);
                    }
                    return row;
                });
            });
        },
        [setRows]
    );

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
                const targetIndex = sourceIndex === 1 ? 0 : 1;

                const beadIndex = getOrderNumberFromList(
                    parentElement.children,
                    target
                );

                changeRow(rowIndex, row => {
                    const beads: BeadsRecords = [...row.beads];
                    const movingBeadsCount =
                        sourceIndex === 1
                            ? beadIndex
                            : beads[sourceIndex] - beadIndex + 1;
                    beads[targetIndex] += movingBeadsCount;
                    beads[sourceIndex] -= movingBeadsCount;
                    return {
                        ...row,
                        beads
                    };
                });
            };

            const clickHandlers: { [key: string]: () => void } = {
                list_upper: () => moveBeadsInList(0),

                list_lower: () => moveBeadsInList(1),

                abacus__section_upper: () =>
                    changeRow(rowIndex, row => ({
                        ...row,
                        topBead: !row.topBead
                    }))
            };

            const parentClassName = Object.keys(clickHandlers).find(className =>
                parentElement.classList.contains(className)
            );

            if (parentClassName) {
                const handler = clickHandlers[parentClassName];

                if (handler) {
                    handler();
                    playSound();
                }
            }
        },
        [playSound, changeRow]
    );

    return { onAbacusClick };
};

export default useAbacus;
