import React, { Dispatch, SetStateAction } from 'react';

import { AbacusRowRecord, BeadColor, SkinColor } from './types/abacus';
import { getNumberedArray } from './utils';
import { defaultRowRecord } from './constants';

type TSetState<T> = Dispatch<SetStateAction<T>>;

interface ContextValueProps {
    skin: SkinColor;
    changeSkin: TSetState<SkinColor>;

    beadColor: BeadColor;
    changeBeadColor: TSetState<BeadColor>;

    rowsCount: number;
    changeRowsCount: TSetState<number>;

    beadsCount: number;
    changeBeadsCount: TSetState<number>;

    rows: AbacusRowRecord[];
}

const emptyFn = (): void => void 0;

export const defaultContextValue: ContextValueProps = {
    skin: 'light',
    changeSkin: emptyFn,

    beadColor: 'blue',
    changeBeadColor: emptyFn,

    rowsCount: 6,
    changeRowsCount: emptyFn,

    beadsCount: 4,
    changeBeadsCount: emptyFn,

    rows: getNumberedArray(6).map(() => defaultRowRecord())
};

export const Context = React.createContext<ContextValueProps>(
    defaultContextValue
);
