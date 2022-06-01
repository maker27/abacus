import React from 'react';
import clsx from 'clsx';

import Bead from './Bead';
import { ClassNameProps } from '../../types/components';
import { BeadColor } from '../../types/abacus';

interface BeadsListProps extends ClassNameProps {
    count: number;
    beadColor: BeadColor;
}

const BeadsList: React.FC<BeadsListProps> = ({
    className,
    count,
    beadColor
}) => {
    return (
        <div className={clsx('abacus__beads-list', className)}>
            {[...Array(count)].map((_, i) => (
                <Bead key={i} color={beadColor} />
            ))}
        </div>
    );
};

export default BeadsList;
