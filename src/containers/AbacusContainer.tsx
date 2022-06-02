import React, { useContext } from 'react';

import Abacus from '../components/Abacus/Abacus';
import { Context } from '../context';

const AbacusContainer: React.FC = () => {
    const { skin, beadColor, rows } = useContext(Context);

    return <Abacus skinColor={skin} beadColor={beadColor} rows={rows} />;
};

export default AbacusContainer;
