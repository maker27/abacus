import React, { useContext } from 'react';

import Abacus from '../components/Abacus/Abacus';
import { Context } from '../context';
import { AbacusRowRecord } from '../types/abacus';
import { TSetState } from '../types/components';
import useAbacus from '../hooks/useAbacus';

interface AbacusContainerProps {
    setRows: TSetState<AbacusRowRecord[]>;
}

const AbacusContainer: React.FC<AbacusContainerProps> = ({ setRows }) => {
    const { skin, beadColor, rows } = useContext(Context);
    const { onAbacusClick } = useAbacus(setRows);

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
