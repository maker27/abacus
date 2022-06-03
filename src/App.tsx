import React from 'react';
import { Provider } from 'react-redux';

import './sass/_global.scss';
import AbacusContainer from './containers/AbacusContainer';
import ControlPanelContainer from './containers/ControlPanelContainer';
import store from './store';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <ControlPanelContainer />
            <AbacusContainer />
        </Provider>
    );
};

export default App;
