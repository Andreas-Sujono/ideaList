import React from 'react';
import {HashRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom'

import Home from './components/mainComponent/home.js'
import About from './components/mainComponent/about.js'
import Login from './components/mainComponent/login.js'
import SignUp from './components/mainComponent/signUp.js'

import NewsSingle from './components/mainComponent/newsSingle.js'
import MyNews from './components/mainComponent/myNews.js'
import MyProfile from './components/mainComponent/myProfile.js'
import Post from './components/mainComponent/post.js'






function App() {
  return (
    <Router>

      <div className="app">

        <Switch>
          <Route exact path='/'component ={Home} />
          <Route path='/about' component= {About} />
          <Route path='/login' component= {Login} />
          <Route path='/signUp' component= {SignUp} />
          <Route path='/newsSingle' component= {NewsSingle} />
          <Route path='/myNews' component= {MyNews} />
          <Route path='/myProfile' component= {MyProfile} />
          <Route path='/newPost' component= {Post} />
        </Switch>

      </div>

    </Router>
  );
}

export default App;
