import React from 'react';

import './ControlPanel.scss';
import LabeledSelect from '../LabeledSelect';
import {
    beadColorOptions,
    beadsCountOptions,
    rowsCountOptions,
    skinOptions
} from '../../constants';
import { BeadColor, SkinColor } from '../../types/abacus';
import useSelect from '../../hooks/useSelect';

interface ControlPanelProps {
    skin: SkinColor;
    beadColor: BeadColor;
    rowsCount: number;
    beadsCount: number;
    changeSkin: (value: SkinColor) => void;
    changeBeadColor: (value: BeadColor) => void;
    changeRowsCount: (value: number) => void;
    changeBeadsCount: (value: number) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
    skin,
    beadColor,
    rowsCount,
    beadsCount,
    changeSkin,
    changeBeadColor,
    changeRowsCount,
    changeBeadsCount
}) => {
    const skinSelect = useSelect<SkinColor>(skin, skinOptions, changeSkin);
    const beadColorSelect = useSelect<BeadColor>(
        beadColor,
        beadColorOptions,
        changeBeadColor
    );
    const rowsCountSelect = useSelect<number>(
        rowsCount,
        rowsCountOptions,
        changeRowsCount
    );
    const beadsCountSelect = useSelect<number>(
        beadsCount,
        beadsCountOptions,
        changeBeadsCount
    );

    return (
        <div className="control-panel">
            <LabeledSelect<SkinColor>
                className="control-panel__item"
                label="Стиль счетов"
                options={skinOptions}
                isColor={true}
                {...skinSelect}
            />
            <LabeledSelect<BeadColor>
                className="control-panel__item"
                label="Цвет косточек"
                options={beadColorOptions}
                isColor={true}
                {...beadColorSelect}
            />
            <LabeledSelect<number>
                className="control-panel__item"
                label="Кол-во стержней"
                options={rowsCountOptions}
                {...rowsCountSelect}
            />
            <LabeledSelect<number>
                className="control-panel__item"
                label="Кол-во косточек"
                options={beadsCountOptions}
                {...beadsCountSelect}
            />
        </div>
    );
};

export default ControlPanel;
