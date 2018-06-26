import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';

const fakeAuth = {
  isAuthenticated: false, // 初始态: 没有认证
  authenticate(cb) { // cb: func, 用来改变地址栏url
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

// withRouter(), 自定义一个router包装组件
const AuthButton = withRouter(
  ({ history }) => (fakeAuth.isAuthenticated ? (
    <p>
      Welcome!
      <button
        type="submit"
        onClick={() => {
          fakeAuth.signout(() => history.push('/'));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>
      You are not logged in.
    </p>
  )),
);

const PrivateRoute = ({ component: Component, path }) => (
  <Route
    path={path}
    render={props => (fakeAuth.isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    ))
    }
  />
);

const Public = () => (
  <h3>
    Public
  </h3>
);
const Protected = () => (
  <h3>
    Protected
  </h3>
);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
    };
    this.login = this.login.bind(this);
  }

  login() {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/login' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>
        You must log in to view the page at
          {from.pathname}
        </p>
        <button type="submit" onClick={this.login}>
        Log in
        </button>
      </div>
    );
  }
}

// //////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const AuthExample = () => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to="/public">
            Public Page
          </Link>
        </li>
        <li>
          <Link to="/protected">
            Protected Page
          </Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  </Router>
);

export default AuthExample;
