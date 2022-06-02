import React from 'react';
import clsx from 'clsx';

import Bead from './Bead';
import { ClassNameProps } from '../../types/components';
import { BeadColor } from '../../types/abacus';
import { getNumberedArray } from '../../utils';

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
            {getNumberedArray(count).map(i => (
                <Bead key={i} color={beadColor} />
            ))}
        </div>
    );
};

export default React.memo(BeadsList);
