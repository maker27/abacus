import React, { useContext } from 'react';

import ControlPanel from '../components/ControlPanel/ControlPanel';
import { Context } from '../context';

const ControlPanelContainer: React.FC = () => {
    const { changeSkin, changeBeadColor } = useContext(Context);

    return (
        <ControlPanel
            changeSkin={changeSkin}
            changeBeadColor={changeBeadColor}
        />
    );
};

export default ControlPanelContainer;
