import React from 'react';
import { useSelector } from 'react-redux';

import ControlPanel from '../components/ControlPanel/ControlPanel';
import {
    AbacusSelector,
    changeBeadColor,
    changeBeadsCount,
    changeRowsCount,
    changeSkin
} from '../store/abacusSlice';
import { BeadColor, SkinColor } from '../types/abacus';
import useDispatchedAction from '../hooks/useDispatchedAction';

const ControlPanelContainer: React.FC = () => {
    const { skin, beadColor, rowsCount, beadsCount } = useSelector(
        AbacusSelector
    );

    const dispatchedChangeSkin = useDispatchedAction<SkinColor>(changeSkin);

    const dispatchedChangeBeadColor = useDispatchedAction<BeadColor>(
        changeBeadColor
    );

    const dispatchedChangeRowsCount = useDispatchedAction<number>(
        changeRowsCount
    );

    const dispatchedChangeBeadsCount = useDispatchedAction<number>(
        changeBeadsCount
    );

    return (
        <ControlPanel
            skin={skin}
            beadColor={beadColor}
            rowsCount={rowsCount}
            beadsCount={beadsCount}
            changeSkin={dispatchedChangeSkin}
            changeBeadColor={dispatchedChangeBeadColor}
            changeRowsCount={dispatchedChangeRowsCount}
            changeBeadsCount={dispatchedChangeBeadsCount}
        />
    );
};

export default ControlPanelContainer;
