import React, { useEffect } from 'react';
import './styles/App.css';
import HomeScreen from './components/homeScreen/HomeScreen';
import Login from './components/login/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const user = null;

  useEffect(() => {
    auth.onAuthSateChanged(userAuth => {
      if (userAuth) {
        console.log(userAuth)
      } else {

      }
    })
  }, [])

  return (
    <div className="app">
      <Router>
        <Switch>
        {!user ? (<Login />) : (<Route exact path="/" component={HomeScreen}/>)}
          <Route path="/d" />
          <Route />
        </Switch>
      </Router>
    </div>
  );
}

export default App;