import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './index';
import {
    AbacusRowRecord,
    BeadColor,
    BeadsRecords,
    SkinColor
} from '../types/abacus';
import { getNumberedArray, padEndArray } from '../utils';
import { defaultRowRecord } from '../constants';

interface AbacusState {
    skin: SkinColor;
    beadColor: BeadColor;
    rowsCount: number;
    beadsCount: number;
    rows: AbacusRowRecord[];
}

const initialState: AbacusState = {
    skin: 'light',
    beadColor: 'blue',
    rowsCount: 6,
    beadsCount: 4,
    rows: getNumberedArray(6).map(() => defaultRowRecord())
};

export const abacusSlice = createSlice({
    name: 'abacus',
    initialState,
    reducers: {
        changeSkin(state, action: PayloadAction<SkinColor>) {
            state.skin = action.payload;
        },

        changeBeadColor(state, action: PayloadAction<BeadColor>) {
            state.beadColor = action.payload;
        },

        changeRowsCount(state, action: PayloadAction<number>) {
            const { rows } = state;
            const prevCount = rows.length;
            const rowsCount = action.payload;
            state.rowsCount = rowsCount;

            state.rows =
                prevCount > rowsCount
                    ? rows.slice(0, rowsCount)
                    : padEndArray<AbacusRowRecord>(
                          rows,
                          rowsCount,
                          defaultRowRecord(state.beadsCount)
                      );
        },

        changeBeadsCount(state, action: PayloadAction<number>) {
            const beadsCount = action.payload;
            state.beadsCount = beadsCount;

            state.rows = state.rows.map(row => {
                const [top] = row.beads;
                return {
                    ...row,
                    beads: [
                        beadsCount < top ? top + (beadsCount - top) : top,
                        Math.max(beadsCount - top, 0)
                    ]
                };
            });
        },

        toggleTopBead(state, action: PayloadAction<number>) {
            const rowIndex = action.payload;
            state.rows = state.rows.map((row, i) => {
                if (rowIndex === i + 1) {
                    return {
                        ...row,
                        topBead: !row.topBead
                    };
                }
                return row;
            });
        },

        moveBead(
            state,
            action: PayloadAction<{
                rowIndex: number;
                sourceIndex: number;
                beadIndex: number;
            }>
        ) {
            const { rowIndex, sourceIndex, beadIndex } = action.payload;
            const targetIndex = sourceIndex === 1 ? 0 : 1;

            state.rows = state.rows.map((row, i) => {
                if (rowIndex === i + 1) {
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
                }
                return row;
            });
        }
    }
});

export const {
    changeSkin,
    changeBeadColor,
    changeRowsCount,
    changeBeadsCount,
    toggleTopBead,
    moveBead
} = abacusSlice.actions;

export const AbacusSelector = (state: RootState): AbacusState => state.abacus;

export default abacusSlice.reducer;
