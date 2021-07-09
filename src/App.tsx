import { StrictMode } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';

import './App.scss';
import { AboutPage } from './pages/About';

function App() {
  return (
    <StrictMode>
      <Router>
        <Navbar/>

        <main className="main">
          <Switch>
            <Route path={ '/' } exact>
              <AboutPage />
            </Route>
            <Route path={ '/about' }>
              <AboutPage />
            </Route>
            <Route path={ '/trajectory' }>
              <h1> Trajectory </h1>
            </Route>
          </Switch>

        </main>
      </Router>

    </StrictMode>
  );
}

export default App;
