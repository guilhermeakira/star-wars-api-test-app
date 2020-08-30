import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';

import Home from './Home';
import Result from './Result';
import theme from './theme';
import useMaster from './Hooks/useMaster';
import MasterContext from './State/MasterContext';

function App() {
  const master = useMaster();

  return (
    <ThemeProvider theme={theme}>
      <MasterContext.Provider value={master}>
        <Router>
            <Switch>
              <Route path="/result">
                <Result />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </Router>
      </MasterContext.Provider>
    </ThemeProvider>
  );
}

export default App;
