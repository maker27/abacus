import React from 'react';

import './ControlPanel.scss';
import LabeledSelect from '../LabeledSelect';
import { beadsOptions, skinOptions } from '../../constants';
import { BeadColor, SkinColor } from '../../types/abacus';

interface ControlPanelProps {
    changeSkin: (value: SkinColor) => void;
    changeBeadColor: (value: BeadColor) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
    changeSkin,
    changeBeadColor
}) => {
    return (
        <div className="control-panel">
            <LabeledSelect<SkinColor>
                className="control-panel__item"
                label="Стиль счетов"
                options={skinOptions}
                isColor={true}
                onChange={changeSkin}
            />
            <LabeledSelect<BeadColor>
                className="control-panel__item"
                label="Цвет косточек"
                options={beadsOptions}
                isColor={true}
                onChange={changeBeadColor}
            />
        </div>
    );
};

export default ControlPanel;
