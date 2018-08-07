import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import stls from './App.css';
import Header from './component/header/Header';
import Content from './component/content/Content';
import Input from './component/input/Input';

const App = () => (
  <Provider store={store}>
    <div className={stls.container}>
      <Header />
      <Content />
      <Input />
    </div>
  </Provider>
);

export default App;
