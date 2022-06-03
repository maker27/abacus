import React from 'react';
import clsx from 'clsx';

import './Abacus.scss';
import AbacusRow from './AbacusRow';
import { AbacusRowRecord, BeadColor, SkinColor } from '../../types/abacus';

interface AbacusProps {
    skinColor: SkinColor;
    beadColor: BeadColor;
    rows: AbacusRowRecord[];
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Abacus: React.FC<AbacusProps> = ({
    skinColor,
    beadColor,
    rows,
    onClick
}) => {
    return (
        <div
            className={clsx('abacus', `abacus_${skinColor}`)}
            onClick={onClick}>
            {rows.map((row, i) => (
                <AbacusRow
                    key={i}
                    beadColor={beadColor}
                    topBeadPosition={row.topBead ? 'top' : 'bottom'}
                    beads={row.beads}
                />
            ))}
        </div>
    );
};

export default Abacus;
