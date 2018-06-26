import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const ParamsExample = () => (
  <Router>
    <div>
      <h2>
      Accounts
      </h2>
      <ul>
        <li>
          <Link to="/netflix">
          Netflix
          </Link>
        </li>
        <li>
          <Link to="/zillow-group">
          Zillow Group
          </Link>
        </li>
        <li>
          <Link to="/yahoo">
          Yahoo
          </Link>
        </li>
        <li>
          <Link to="/modus-create">
          Modus Create
          </Link>
        </li>
      </ul>

      <hr />

      <Link to="/order/asc">
      regex匹配(Child组件也被匹配到了, 加上 exact就匹配不到了)
      </Link>

      <Route exact path="/:id" component={Child} />


      {/*
         It's possible to use regular expressions to control what param values should be matched.
            * "/order/asc"  - matched
            * "/order/desc" - matched
            * "/order/foo"  - not matched
      */}
      <Route
        path="/order/:direction(asc|desc)"
        component={ComponentWithRegex}
      />
    </div>
  </Router>
);

const Child = ({ match }) => (
  <div>
    <h3>
    ID:
      {match.params.id}
      {
        console.log(match)
      }
    </h3>
  </div>
);

/* const Child = props => (
  <div>
    <h3>
    ID:
      {props.match.params.id}
      {
        console.log(props)
      }
    </h3>
  </div>
);
 */
/* class Child extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var match = this.props.match;
    return (
      <div>
        <h3>
        ID:
          {match.params.id}
        </h3>
      </div>
    );
  }
} */

const ComponentWithRegex = ({ match }) => (
  <div>
    <h3>
    Only asc/desc are allowed:
      {match.params.direction}
    </h3>
  </div>
);

export default ParamsExample;
