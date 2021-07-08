import { StrictMode } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import Navbar from './components/Navbar';

function App() {
  return (
    <StrictMode>
      <Router>

        <Navbar/>

        <div className="main">

          <Switch>
            <Route path={ '/' } exact>
              <h1> About </h1>
            </Route>
            <Route path={ '/about' }>
              <h1> About </h1>
            </Route>
            <Route path={ '/trajectory' }>
              <h1> Trajectory </h1>
            </Route>
          </Switch>

        </div>
      </Router>

    </StrictMode>
  );
}

export default App;
