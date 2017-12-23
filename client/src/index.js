import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './js/App';
import registerServiceWorker from './registerServiceWorker';
import BrowserRouter from 'react-router-dom';
import Home from './js/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import './stylesheets/home.css';

const App = () => (
  <MuiThemeProvider>
    <Home />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
