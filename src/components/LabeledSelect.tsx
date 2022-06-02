import React from 'react';
import { OnChangeValue, PropsValue } from 'react-select';
import clsx from 'clsx';

import { ClassNameProps, ColorSelectOption } from '../types/components';
import Select, { SelectProps } from './Select';

interface LabeledSelectProps<OptionType>
    extends ClassNameProps,
        SelectProps<OptionType> {
    label: string;
    isColor?: boolean;
    value?: PropsValue<OptionType>;
    options: OptionType[];
    onChange: (value: OnChangeValue<OptionType, false>) => void;
}

const LabeledSelect = <T,>({
    className,
    label,
    value,
    options,
    isColor = false,
    onChange
}: React.PropsWithChildren<
    LabeledSelectProps<ColorSelectOption<T>>
>): JSX.Element => {
    return (
        <label className={clsx('labeled-select', className)}>
            <span className="labeled-select__label">{label}</span>
            <Select<T>
                isColor={isColor}
                value={value}
                onChange={onChange}
                options={options}
            />
        </label>
    );
};

export default LabeledSelect;
