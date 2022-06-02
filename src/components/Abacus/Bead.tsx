import React from 'react';
import clsx from 'clsx';

import './Bead.scss';
import { ClassNameProps } from '../../types/components';
import { BeadColor } from '../../types/abacus';

interface BeadProps extends ClassNameProps {
    color?: BeadColor;
}

const Bead: React.FC<BeadProps> = ({ className, color = 'blue' }) => {
    return <div className={clsx('bead', className, `bead_${color}`)}></div>;
};

export default React.memo(Bead);
