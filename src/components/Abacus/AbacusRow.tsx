import React from 'react';
import clsx from 'clsx';

import './AbacusRow.scss';
import { ClassNameProps } from '../../types/components';
import Bead from './Bead';
import BeadsList from './BeadsList';
import { BeadsRecords, TopBeadPosition } from '../../types/abacus';

interface AbacusRowProps extends ClassNameProps {
    topBeadPosition: TopBeadPosition;
    beads: BeadsRecords;
}

const AbacusRow: React.FC<AbacusRowProps> = ({
    className,
    topBeadPosition,
    beads
}) => {
    return (
        <div className={clsx('abacus__row', className)}>
            <div className="abacus__section abacus__section_upper">
                <Bead
                    className={`bead_align-${topBeadPosition}`}
                    color="orange"
                />
            </div>
            <div className="abacus__section abacus__section_lower">
                <BeadsList count={beads[0]} />
                <BeadsList count={beads[1]} />
            </div>
        </div>
    );
};

export default AbacusRow;
