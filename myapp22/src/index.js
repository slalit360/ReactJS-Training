import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import "./app2.css";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Person from './Contributor';
import Store from './Store';
import Bengaluru from './Bengaluru';
import Tutorial from './Tutorial';
import Desc from './Desc';
import Contributor from './Contributor';
import Contact from './Contact';
import Login from './Login';
import ReduxDemo from './ReduxDemo';
import {Provider} from 'react-redux';
import configureStore  from './store/configureStore'


ReactDOM.render(<App />, document.getElementById('root'));
/*const store = configureStore();

ReactDOM.render(<Provider store={store}>
<Router>
    <div>
        <Route path='/' component={App2}/>
        <Route path='/home' component={Home}/>
        <Route path='/contributor' component={Contributor} />
        <Route path='/store' component={Store} />
        <Route path='/store/bengaluru' component={Bengaluru} />
        <Route path='/tutorial' component={Tutorial} />
        <Route path='/tutorial/:topic' component={Desc} />
        <Route path='/contact' component={Contact} />
        <Route path='/login' component={Login} />
        <Route path='/redux' component={ReduxDemo} />
    </div>
</Router></Provider>, document.getElementById('root'));
*/
serviceWorker.unregister();
