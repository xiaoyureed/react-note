import React from 'react';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/Main';
import store from './store';

// ReactDOM.render(
//   <Provider store={store}>
//     {/* Stateless Component，负责所有 View 的进入点 */}
//     <Main />
//   </Provider>,
//   document.getElementById('app'),
// );

const App = () => (
  <Provider store={store}>
    {/* Stateless Component，负责所有 View 的进入点 */}
    <Main />
  </Provider>
);

export default App;
