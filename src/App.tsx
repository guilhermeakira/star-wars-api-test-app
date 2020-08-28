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

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
