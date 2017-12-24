import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import Home from './js/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (<MuiThemeProvider>
  <Home/>
</MuiThemeProvider>);

ReactDOM.render(<App/>, document.getElementById('root'));
// comment out when developing registerServiceWorker();