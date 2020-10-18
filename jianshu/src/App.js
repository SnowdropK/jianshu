import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store'

import Header from './common/header'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
