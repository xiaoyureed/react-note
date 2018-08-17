import React from 'react';
import ReactDOM from 'react-dom';
// react-router official demos
// import BasicExample from './router/BasicExample';
// import ParamExample from './router/ParamExample';
// import AuthExample from './router/AuthExample';
// import CustomLinkExample from './router/CustomLinkExample';
// import PreventingTransitionsExample from './router/PreventingTransitionsExample';
// import NoMatchExample from './router/NoMatchExample';
// import RecursiveExample from './router/RecursiveExample'; // bug
// import SidebarExample from './router/SidebarExample';
// import AnimationExample from './router/AnimationExample'; // bug
// import AmbiguousExample from './router/AmbiguousExample';
// import RouteConfigExample from './router/RouteConfigExample';
// import ModalGallery from './router/ModalGallery';

// components: 尝试组件化开发
// import App from './components/App';

// flux: todoApp 简单版本
// import App from './flux';

// redux: TodoApp
// import App from './redux/App';

// md2html
// import App from './md2html/App';
// bootstrap
// import App from './bootstrap/App';

// antd
// import { DatePicker } from 'antd';

// cssdemo
// import App from './cssdemo/App';

// intro
import App from './intro/App';

function render(element) {
  ReactDOM.render(element, document.getElementById('app'));
}


// ReactDOM.render(<BasicExample />, document.getElementById('app'));
// ReactDOM.render(<ParamExample />, document.getElementById('app'));
// ReactDOM.render(<AuthExample />, document.getElementById('app'));
// ReactDOM.render(<CustomLinkExample />, document.getElementById('app'));
// ReactDOM.render(<PreventingTransitionsExample />, document.getElementById('app'));
// ReactDOM.render(<NoMatchExample />, document.getElementById('app'));
// ReactDOM.render(<RecursiveExample />, document.getElementById('app'));
// ReactDOM.render(<SidebarExample />, document.getElementById('app'));
// ReactDOM.render(<AnimationExample />, document.getElementById('app'));
// ReactDOM.render(<AmbiguousExample />, document.getElementById('app'));
// ReactDOM.render(<RouteConfigExample />, document.getElementById('app'));
// ReactDOM.render(<ModalGallery />, document.getElementById('app'));

// ReactDOM.render(<DatePicker />, document.getElementById('app'));

render(<App />);
