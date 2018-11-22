import React from 'react';
import {render} from 'react-dom';

import {HashRouter,Route} from 'react-router-dom';

import App from './components/App';

render(
    <HashRouter>
        <App/>
        {/* <Route component={App}/> */}
    </HashRouter>,
    document.getElementById('app')
)