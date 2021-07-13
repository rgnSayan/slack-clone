import React from 'react';
import './App.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Chat from './Components/Chat'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from 'react';
import Login from './Components/Login'
import { useStateValue } from './Components/StateProvider'

function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Fragment>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch >
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <span className="app__welcome">Welcome 🙏 To The Home Page {user?.displayName} 😊</span>
                </Route>
              </Switch>
            </div>
          </Fragment>
        )}
      </Router>
    </div>
  );
}

export default App;
