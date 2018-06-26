import React from 'react';
import {
  Link,
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from './appStyles';
// import NavLink from '../NavLink';
import Home from '../Home';
import Repos from '../Repos';
import About from '../About';
import User from '../User';
import Contacts from '../Contacts';

const App = () => (
  <div>
    <h1>
      React Router Tutorial
    </h1>
    <ul>
      {/* <li>
        <NavLink to="/" activeClassName="active">
          Home (样式: 传统 CSS 载入)
        </NavLink>
      </li> */}
      <li>
        <NavLink to="/about" activeStyle={{ color: 'green' }}>
          About (是 a 元素的 React 版本, css: Inline Style)
        </NavLink>
      </li>
      <li>
        <NavLink to="/repos/react-router" activeStyle={styles.active}>
          Repos (css: 外部引入 Inline Style 写法)
        </NavLink>
      </li>
      <li>
        <NavLink to="/user" activeClassName="active">
          User
        </NavLink>
      </li>
      <li>
        <Link to="/contacts">
          Contacts
        </Link>
      </li>
    </ul>

    <hr />

  </div>);

/* App.propTypes = {
  children: PropTypes.object,
}; */

const AppIndex = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />

      {/* <Route exact path="/" component={Home} /> */}
      <Route path="/repos/:name" component={Repos} />
      <Route path="/about" component={About} />
      <Route path="/user" component={User} />
      <Route path="/contacts" component={Contacts} />
    </Switch>
  </Router>
);

export default AppIndex;
