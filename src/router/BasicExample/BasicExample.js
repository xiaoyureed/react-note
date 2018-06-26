import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
// match是一个匹配路径参数的对象，它有一个属性params，里面的内容就是路径参数，
// 除常用的params属性外，它还有url(就是uri)、path(原始串, 没被替换前的)、isExact属性。
// `${match.url}/:name` 通过this.props.match.params.name得到实际值
const Topic = ({ match }) => (
  <div>
    <h3>
      {match.params.topicId}
      <br />
      {match.url}
      <br />
      {match.path}
      <br />
      {match.isExact}
    </h3>
  </div>
);
/* Topic.propTypes = {
  match: PropTypes.func.isRequired,
}; */

const Topics = ({ match }) => (
  <div>
    <h2>
    Topics
    </h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
        Rendering with React(
          {match.url}
        )
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
        Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
        Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={
        () => (
          <h3>
            Please select a topic.
          </h3>
        )
      }
    />
  </div>
);
/* Topics.propTypes = {
  match: PropTypes.shape({}).isRequired,
}; */

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">
          Home
          </Link>
        </li>
        <li>
          <Link to="/about">
          About
          </Link>
        </li>
        <li>
          <Link to="/topics">
          Topics
          </Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default BasicExample;
