import { Color } from './colors';

export interface ClassNameProps {
    className?: string;
}

export interface SelectOption<T = string> {
    value: T;
    label: string;
}

export interface ColorSelectOption<T = string> extends SelectOption<T> {
    color?: Color;
}
