import React from 'react';
import { Provider } from 'react-redux';
import Input from './component/container/Input';
import Output from './component/container/Output';
import store from './store/store';

const App = () => (
  <Provider store={store}>
    <div>
      <Input />
      <Output />
    </div>
  </Provider>
);

export default App;
