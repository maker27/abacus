import React, { useMemo, useState } from 'react';

import './App.scss';
import AbacusContainer from './containers/AbacusContainer';
import ControlPanelContainer from './containers/ControlPanelContainer';
import { Context, defaultContextValue } from './context';
import { BeadColor, SkinColor } from './types/abacus';

const App: React.FC = () => {
    const [skin, changeSkin] = useState<SkinColor>(defaultContextValue.skin);
    const [beadColor, changeBeadColor] = useState<BeadColor>(
        defaultContextValue.beadColor
    );

    const contextValue = useMemo(
        () => ({
            skin,
            changeSkin,
            beadColor,
            changeBeadColor
        }),
        [skin, beadColor]
    );

    return (
        <Context.Provider value={contextValue}>
            <ControlPanelContainer />
            <AbacusContainer />
        </Context.Provider>
    );
};

export default App;
