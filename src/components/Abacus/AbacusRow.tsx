import React from 'react';
import clsx from 'clsx';

import './AbacusRow.scss';
import { ClassNameProps } from '../../types/components';
import Bead from './Bead';
import BeadsList from './BeadsList';
import { BeadColor, BeadsRecords, TopBeadPosition } from '../../types/abacus';

interface AbacusRowProps extends ClassNameProps {
    beadColor: BeadColor;
    topBeadPosition: TopBeadPosition;
    beads: BeadsRecords;
}

const AbacusRow: React.FC<AbacusRowProps> = ({
    className,
    beadColor,
    topBeadPosition,
    beads
}) => {
    return (
        <div className={clsx('abacus__row', className)}>
            <div className="abacus__section abacus__section_upper">
                <Bead
                    className={`bead_align-${topBeadPosition}`}
                    color={beadColor}
                />
            </div>
            <div className="abacus__section abacus__section_lower">
                <BeadsList
                    className="list_upper"
                    count={beads[0]}
                    beadColor={beadColor}
                />
                <BeadsList
                    className="list_lower"
                    count={beads[1]}
                    beadColor={beadColor}
                />
            </div>
        </div>
    );
};

export default React.memo(AbacusRow);
