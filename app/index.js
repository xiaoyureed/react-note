import React from 'react';// eslint规范报错: import是保留字(https://github.com/yannickcr/eslint-plugin-react/issues/447#issuecomment-184617282)
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>
          Hello, World -- xy!
        </h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
