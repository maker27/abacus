import React from 'react';

import Bead from './Bead';
import { ClassNameProps } from '../../types/components';
import clsx from 'clsx';

interface BeadsListProps extends ClassNameProps {
    count: number;
}

const BeadsList: React.FC<BeadsListProps> = ({ className, count }) => {
    return (
        <div className={clsx('abacus__beads-list', className)}>
            {[...Array(count)].map((_, i) => (
                <Bead key={i} />
            ))}
        </div>
    );
};

export default BeadsList;
