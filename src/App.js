import React from 'react'
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import firebase, { FirebaseContext } from './firebase'
import useAuth from './authentication/useAuth'
import Header from './components/Header'
import Home from './components/Home'
import Login from './authentication/Login'
import ForgotPassword from './authentication/ForgotPassword'

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
          </Switch>
          </div>
        </div>
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
