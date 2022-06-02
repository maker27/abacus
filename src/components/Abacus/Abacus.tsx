import React from 'react';
import clsx from 'clsx';

import './Abacus.scss';
import AbacusRow from './AbacusRow';
import { AbacusRowRecord, BeadColor, SkinColor } from '../../types/abacus';

interface AbacusProps {
    skinColor: SkinColor;
    beadColor: BeadColor;
    rows: AbacusRowRecord[];
}

const Abacus: React.FC<AbacusProps> = ({ skinColor, beadColor, rows }) => {
    return (
        <div className={clsx('abacus', `abacus_${skinColor}`)}>
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
