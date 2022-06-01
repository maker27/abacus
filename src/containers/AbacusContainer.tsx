import React, { useContext } from 'react';

import Abacus from '../components/Abacus/Abacus';
import { AbacusRowRecords } from '../types/abacus';
import { Context } from '../context';

const rows: AbacusRowRecords = [
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

const AbacusContainer: React.FC = () => {
    const { skin, beadColor } = useContext(Context);

    return <Abacus skinColor={skin} beadColor={beadColor} rows={rows} />;
};

export default AbacusContainer;
