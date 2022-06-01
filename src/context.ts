import React, { Dispatch, SetStateAction } from 'react';

import { BeadColor, SkinColor } from './types/abacus';

type TSetState<T> = Dispatch<SetStateAction<T>>;

interface ContextValueProps {
    skin: SkinColor;
    beadColor: BeadColor;
    changeSkin: TSetState<SkinColor>;
    changeBeadColor: TSetState<BeadColor>;
}

export const defaultContextValue: ContextValueProps = {
    skin: 'light',
    beadColor: 'blue',
    changeSkin: () => null,
    changeBeadColor: () => null
};

export const Context = React.createContext<ContextValueProps>(
    defaultContextValue
);
