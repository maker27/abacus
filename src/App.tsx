import React from 'react';

import './App.scss';
import Abacus from './components/Abacus/Abacus';
import ControlPanel from './components/ControlPanel/ControlPanel';

const App: React.FC = () => {
    return (
        <>
            <ControlPanel />
            <Abacus />
        </>
    );
};

export default App;
