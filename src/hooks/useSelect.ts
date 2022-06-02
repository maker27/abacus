import { useCallback, useMemo } from 'react';
import { OnChangeValue } from 'react-select';

import { SelectOption } from '../types/components';

const useSelect = <T>(
    selectedValue: T,
    options: SelectOption<T>[],
    onChangeValue: (newValue: T) => void
): {
    value?: SelectOption<T>;
    onChange: (value: OnChangeValue<SelectOption<T>, false>) => void;
} => {
    const value = useMemo(
        () => options.find(option => option.value === selectedValue),
        [selectedValue, options]
    );

    const onChange = useCallback(
        (v: SelectOption<T> | null) => {
            if (v) onChangeValue(v.value);
        },
        [onChangeValue]
    );

    return {
        value,
        onChange
    };
};

export default useSelect;
