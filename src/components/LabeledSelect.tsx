import React from 'react';
import Select, { OnChangeValue, StylesConfig } from 'react-select';
import chroma from 'chroma-js';
import clsx from 'clsx';

import { ClassNameProps, ColorSelectOption } from '../types/components';

const dotIconStyles = (color = 'transparent') => ({
    display: 'flex',
    alignItems: 'center',

    ':before': {
        backgroundColor: color,
        borderRadius: 10,
        content: '" "',
        display: 'block',
        marginRight: 8,
        height: 10,
        width: 10
    }
});

const getOptionsStyles = <T,>(isColor: boolean) => {
    if (!isColor) return;

    const colourStyles: StylesConfig<ColorSelectOption<T>> = {
        control: styles => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isFocused, isSelected }) => {
            const color = chroma(data.color);
            return {
                ...styles,

                backgroundColor: isSelected
                    ? data.color
                    : isFocused
                    ? color.alpha(0.1).css()
                    : undefined,

                color: isSelected
                    ? chroma.contrast(color, 'white') > 2
                        ? 'white'
                        : 'black'
                    : data.color,

                ':active': {
                    ...styles[':active'],
                    backgroundColor: isSelected
                        ? data.color
                        : color.alpha(0.3).css()
                }
            };
        },
        input: styles => ({ ...styles, ...dotIconStyles() }),
        placeholder: styles => ({ ...styles, ...dotIconStyles('#ccc') }),
        singleValue: (styles, { data }) => ({
            ...styles,
            ...dotIconStyles(data.color)
        })
    };

    return colourStyles;
};

interface LabeledSelectProps<T> extends ClassNameProps {
    label: string;
    options: ColorSelectOption<T>[];
    isColor?: boolean;
    onChange: (value: T) => void;
}

const LabeledSelect = <T,>({
    className,
    label,
    options,
    isColor = false,
    onChange
}: React.PropsWithChildren<LabeledSelectProps<T>>): JSX.Element => {
    const onChangeHandler = (
        newValue: OnChangeValue<ColorSelectOption<T>, false>
    ) => {
        if (newValue) onChange(newValue.value);
    };

    return (
        <label className={clsx('labeled-select', className)}>
            <span className="labeled-select__label">{label}</span>
            <Select<ColorSelectOption<T>>
                defaultValue={options[0]}
                onChange={onChangeHandler}
                options={options}
                styles={getOptionsStyles<T>(isColor)}
            />
        </label>
    );
};

export default LabeledSelect;
