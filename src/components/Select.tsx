import React, { useMemo } from 'react';
import ReactSelect, {
    Props as ReactSelectProps,
    StylesConfig
} from 'react-select';
import chroma from 'chroma-js';

import { ColorSelectOption } from '../types/components';

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

const getColourStyles = <
    T,
    OptionType extends ColorSelectOption<T> = ColorSelectOption<T>
>(
    isColor?: boolean
) => {
    if (!isColor) return;

    const colourStyles: StylesConfig<OptionType, false> = {
        control: styles => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isFocused, isSelected }) => {
            if (!data.color) return styles;
            const chromaColor = chroma(data.color);
            return {
                ...styles,

                backgroundColor: isSelected
                    ? data.color
                    : isFocused
                    ? chromaColor.alpha(0.1).css()
                    : undefined,

                color: isSelected
                    ? chroma.contrast(chromaColor, 'white') > 2
                        ? 'white'
                        : 'black'
                    : data.color,

                ':active': {
                    ...styles[':active'],
                    backgroundColor: isSelected
                        ? data.color
                        : chromaColor.alpha(0.3).css()
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

export interface SelectProps<T> extends ReactSelectProps<T, false> {
    isColor?: boolean;
}

const Select = <
    T,
    OptionType extends ColorSelectOption<T> = ColorSelectOption<T>
>({
    isColor,
    ...props
}: React.PropsWithChildren<SelectProps<OptionType>>): JSX.Element => {
    const styles = useMemo(() => getColourStyles<T, OptionType>(isColor), [
        isColor
    ]);
    return (
        <ReactSelect<OptionType> {...props} styles={styles} isMulti={false} />
    );
};

const typedMemo: <T>(c: T) => T = React.memo;

export default typedMemo(Select);
