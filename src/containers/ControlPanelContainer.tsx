import React, { useContext } from 'react';

import ControlPanel from '../components/ControlPanel/ControlPanel';
import { Context } from '../context';

const ControlPanelContainer: React.FC = () => {
    const {
        skin,
        beadColor,
        rowsCount,
        beadsCount,
        changeSkin,
        changeBeadColor,
        changeRowsCount,
        changeBeadsCount
    } = useContext(Context);

    return (
        <ControlPanel
            skin={skin}
            beadColor={beadColor}
            rowsCount={rowsCount}
            beadsCount={beadsCount}
            changeSkin={changeSkin}
            changeBeadColor={changeBeadColor}
            changeRowsCount={changeRowsCount}
            changeBeadsCount={changeBeadsCount}
        />
    );
};

export default ControlPanelContainer;
