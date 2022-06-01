import { ColorSelectOption } from './types/components';
import { BeadColor, SkinColor } from './types/abacus';

export const skinOptions: ColorSelectOption<SkinColor>[] = [
    { value: 'light', label: 'Светлый', color: '#f5f5dc' },
    { value: 'dark', label: 'Тёмный', color: '#b8860b' }
];

export const beadsOptions: ColorSelectOption<BeadColor>[] = [
    { value: 'blue', label: 'Синий', color: '#0052cc' },
    { value: 'orange', label: 'Оранжевый', color: '#ff8b00' }
];
