import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
// import css from './App.css';

const App = () => (
  <div>
    <div>
      {/* 标准按钮 */}
      <Button>
      Default
      </Button>

      {/* 提供重要视觉感知及标识重要操作的按钮 */}
      <Button bsStyle="primary">
      Primary
      </Button>

      {/* 指示成功或正面操作按钮 */}
      <Button bsStyle="success">
      Success
      </Button>

      {/* 提供上下文帮助的提示信息按钮 */}
      <Button bsStyle="info">
      Info
      </Button>

      {/* 提醒操作需要小心使用 */}
      <Button bsStyle="warning">
      Warning
      </Button>

      {/* 提醒操作可能会导致危险或造成负面影响 */}
      <Button bsStyle="danger">
      Danger
      </Button>

      {/* 像一个链接但有按钮的操作行为 */}
      <Button bsStyle="link">
      Link
      </Button>
    </div>

    <ButtonToolbar>
      {/* toolbar是为了保持按钮间隙 */}
      {/* 标准按钮 */}
      <Button>
      Default
      </Button>

      {/* 提供重要视觉感知及标识重要操作的按钮 */}
      <Button bsStyle="primary">
      Primary
      </Button>

      {/* 指示成功或正面操作按钮 */}
      <Button bsStyle="success">
      Success
      </Button>

      {/* 提供上下文帮助的提示信息按钮 */}
      <Button bsStyle="info">
      Info
      </Button>

      {/* 提醒操作需要小心使用 */}
      <Button bsStyle="warning">
      Warning
      </Button>

      {/* 提醒操作可能会导致危险或造成负面影响 */}
      <Button bsStyle="danger">
      Danger
      </Button>

      {/* 像一个链接但有按钮的操作行为 */}
      <Button bsStyle="link">
      Link
      </Button>
    </ButtonToolbar>
  </div>
);

// const App = () => (
//   <div
//     className={css.demo}
//   >
//     hello
//   </div>
// );

export default App;
