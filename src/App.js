import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';

import Home from './component/Home';
import Nav from './component/Nav/Nav';
import './App.css';

ReactDOM.render(
        <Router>
            <div className="warp">
                <Route path="/" component={Home}/>
                <Route path="/index" component={Nav}/>
            </div>
        </Router>,
    document.getElementById('root')
);
registerServiceWorker();
