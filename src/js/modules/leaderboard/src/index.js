
/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import  {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/css/styles.css'; //Webpack can import CSS files too!
//import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);