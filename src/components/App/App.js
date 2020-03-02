import React from 'react';
import Routes from 'components/Routes'
import {Provider} from 'react-redux'
import store from 'store'

import './style.scss'

const App = () => {
  return (
    <div className="app">
      <Provider store ={store}>
        <Routes/>
      </Provider>
    </div>
  );
}

export default App;
