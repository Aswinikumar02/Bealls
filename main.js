import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './client/components/homePage.jsx';
import Additem from './client/components/addItem.jsx';
import CreatePO from './client/views/createPO.jsx';
import Summary from './client/views/summary.jsx';
import Popage from './client/components/poList.jsx';
import allReducers from './redux/reducers/allReducers.js';


import {HashRouter, Route, Link} from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';


const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
        <div>
          <Route exact path='/' component={Homepage}/>
          <Route  path='/createPO/:poId' component={CreatePO}/>
          <Route  path='/addItem/:supplier/:poId' component={Additem}/>
          <Route  path='/summary' component={Summary}/>
        </div>
        </HashRouter>
    </Provider>

  , document.getElementById('app'));
