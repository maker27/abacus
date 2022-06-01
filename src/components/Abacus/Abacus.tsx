import React from 'react';

import './Abacus.scss';
import AbacusRow from './AbacusRow';
import { BeadsRecords } from '../../types/abacus';

const rows: { topBead: boolean; beads: BeadsRecords }[] = [
    {
        topBead: false,
        beads: [3, 1]
    },
    {
        topBead: true,
        beads: [2, 2]
    },
    {
        topBead: true,
        beads: [0, 4]
    },
    {
        topBead: false,
        beads: [3, 1]
    },
    {
        topBead: true,
        beads: [0, 4]
    }
];

const Abacus: React.FC = () => {
    return (
        <div className="abacus">
            {rows.map((row, i) => (
                <AbacusRow
                    key={i}
                    topBeadPosition={row.topBead ? 'top' : 'bottom'}
                    beads={row.beads}
                />
            ))}
        </div>
    );
};

export default Abacus;
