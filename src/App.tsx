import React, { useEffect, useMemo, useState } from 'react';

import './sass/_global.scss';
import AbacusContainer from './containers/AbacusContainer';
import ControlPanelContainer from './containers/ControlPanelContainer';
import { Context, defaultContextValue } from './context';
import { AbacusRowRecord, BeadColor, SkinColor } from './types/abacus';
import { padEndArray } from './utils';
import { defaultRowRecord } from './constants';

const App: React.FC = () => {
    const [skin, changeSkin] = useState<SkinColor>(defaultContextValue.skin);
    const [beadColor, changeBeadColor] = useState<BeadColor>(
        defaultContextValue.beadColor
    );
    const [rowsCount, changeRowsCount] = useState<number>(
        defaultContextValue.rowsCount
    );
    const [beadsCount, changeBeadsCount] = useState<number>(
        defaultContextValue.beadsCount
    );
    const [rows, setRows] = useState<AbacusRowRecord[]>(
        defaultContextValue.rows
    );

    useEffect(() => {
        setRows(prevRows => {
            const prevCount = prevRows.length;
            if (rowsCount !== prevCount) {
                return prevCount > rowsCount
                    ? prevRows.slice(0, rowsCount)
                    : padEndArray<AbacusRowRecord>(
                          prevRows,
                          rowsCount,
                          defaultRowRecord(beadsCount)
                      );
            } else {
                return prevRows;
            }
        });
    }, [rowsCount, beadsCount]);

    useEffect(() => {
        setRows(prevRows => {
            return prevRows.map(row => {
                const [top] = row.beads;
                return {
                    ...row,
                    beads: [
                        beadsCount < top ? top + (beadsCount - top) : top,
                        Math.max(beadsCount - top, 0)
                    ]
                };
            });
        });
    }, [beadsCount]);

    const contextValue = useMemo(
        () => ({
            skin,
            changeSkin,
            beadColor,
            changeBeadColor,
            rowsCount,
            changeRowsCount,
            beadsCount,
            changeBeadsCount,
            rows
        }),
        [skin, beadColor, rowsCount, beadsCount, rows]
    );

    return (
        <Context.Provider value={contextValue}>
            <ControlPanelContainer />
            <AbacusContainer setRows={setRows} />
        </Context.Provider>
    );
};

export default App;
