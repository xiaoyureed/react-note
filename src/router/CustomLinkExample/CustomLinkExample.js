import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const LinkInner = ({ match, to, label }) => (
  <div className={match ? 'active' : ''}>
    {match ? '> ' : ''}
    <Link to={to}>
      {label}
    </Link>
  </div>
);

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    // children: 无论是否匹配, 都会渲染; 如果希望放到标签体内, 满足"总是渲染", 去掉path
    children={({ match }) => (
      <div /* className={match ? "active" : ""} */>
        {/* 是否匹配, 如果匹配, 加上">" */}
        {match ? "> " : ""}
        <Link to={to}>{label}</Link>
      </div>
    )}
  >
    {/* <LinkInner to={to} label={label} /> */}
  </Route>
);

const Home = () => (
  <div>
    <h2>
    Home
    </h2>
  </div>
);

const About = () => (
  <div>
    <h2>
    About
    </h2>
  </div>
);

const CustomLinkExample = () => (
  <Router>
    <div>
      <OldSchoolMenuLink activeOnlyWhenExact to="/" label="Home" />
      <OldSchoolMenuLink to="/about" label="About" />
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default CustomLinkExample;
