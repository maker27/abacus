import { Color } from './colors';

export interface ClassNameProps {
    className?: string;
}

export interface ColorSelectOption<T = string> {
    value: T;
    label: string;
    color: Color;
}
