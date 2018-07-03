import React from 'react';
import { Provider } from 'react-redux';
import Input from './component/container/Input';
import Output from './component/container/Output';
import store from './store/store';

const App = () => (
  <Provider store={store}>
    <div style={{
      display: 'flex',
      boxSizing: 'border-box',
      position: 'absolute',
      border: '3px solid green',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
    }}
    >
      <Input />
      <Output />
    </div>
  </Provider>
);

export default App;
