import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import LeaderboardPage from './components/leaderboard/LeaderboardPage';
import AboutPage from './components/about/AboutPage';

export default(
    <Route path="/" component="App">
        <IndexRoute component={LeaderboardPage}/>
        <Route path='about' component={AboutPage}/>
    </Route>
);