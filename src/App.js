import React from 'react'
import './App.css';
import './styles/style.css'
import { BrowserRouter, Switch, Route, Redirect, Component } from 'react-router-dom'
import PrivateRoute from './authentication/PrivateRoute'
import firebase, { FirebaseContext } from './firebase'
import useAuth from './authentication/useAuth'
import Header from './components/Header'
import Home from './components/Home'
import Login from './authentication/Login'
import ForgotPassword from './authentication/ForgotPassword'
import Painel from './components/Painel'
import CreatePost from './components/CreatePost'
import Blog from './components/Blog'
import UpdatePost from './components/UpdatePost'
import ReadPost from './components/ReadPost'

function App() {

  const user = useAuth()

  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <div className="app-container">
          <Header />
          <div className="route-container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/forgot' component={ForgotPassword} />
            <Route path='/create' component={CreatePost} />
            <Route path='/blog' component={Blog} />
            <Route path='/update/:postId' component={UpdatePost} />
            <Route path='/post/:postId' component={ReadPost} />
            <PrivateRoute path='/painel' component={Painel} />
          </Switch>
          </div>
        </div>
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
