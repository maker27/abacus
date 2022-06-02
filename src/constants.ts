import { ColorSelectOption, SelectOption } from './types/components';
import { AbacusRowRecord, BeadColor, SkinColor } from './types/abacus';
import { getNumberedArray } from './utils';

export const skinOptions: ColorSelectOption<SkinColor>[] = [
    { value: 'light', label: 'Светлый', color: '#f5f5dc' },
    { value: 'dark', label: 'Тёмный', color: '#b8860b' }
];

export const beadColorOptions: ColorSelectOption<BeadColor>[] = [
    { value: 'blue', label: 'Синий', color: '#0052cc' },
    { value: 'orange', label: 'Оранжевый', color: '#ff8b00' }
];

export const defaultRowRecord = (countInRow = 6): AbacusRowRecord => {
    return {
        topBead: false,
        beads: [0, countInRow]
    };
};

const MIN_ROWS_COUNT = 3;
const MAX_ROWS_COUNT = 8;

const MIN_BEADS_COUNT = 1;
const MAX_BEADS_COUNT = 7;

export const rowsCountOptions: SelectOption<number>[] = getNumberedArray(
    MAX_ROWS_COUNT - MIN_ROWS_COUNT + 1,
    MIN_ROWS_COUNT
).map(i => {
    return { value: i, label: i.toString() };
});

export const beadsCountOptions: SelectOption<number>[] = getNumberedArray(
    MAX_BEADS_COUNT - MIN_BEADS_COUNT + 1,
    MIN_BEADS_COUNT
).map(i => {
    return { value: i, label: i.toString() };
});
