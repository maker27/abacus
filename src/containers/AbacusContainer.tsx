import React from 'react';
import { useSelector } from 'react-redux';

import Abacus from '../components/Abacus/Abacus';
import useAbacus from '../hooks/useAbacus';
import { AbacusSelector } from '../store/abacusSlice';

const AbacusContainer: React.FC = () => {
    const { skin, beadColor, rows } = useSelector(AbacusSelector);

    const { onAbacusClick } = useAbacus();

    return (
        <Abacus
            skinColor={skin}
            beadColor={beadColor}
            rows={rows}
            onClick={onAbacusClick}
        />
    );
};

export default AbacusContainer;
