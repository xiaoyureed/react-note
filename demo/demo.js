 /* text/babel表示为jsx语法， 和js不兼容 */
/* ReactDOM.render()函数: 将jsx模板转为html并渲染到真实dom中, jsx语法: html直接写在js中（遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析） */
var xxx = 'xiaoyu';
var props = {
    className: "main",
    style: 'color: "red"'
};
var style = {
    color: "red"
};
ReactDOM.render(
    <h1 {...props} style={style} >{xxx}</h1>,// 如果是{'xxx'}, 结果不会替换
    document.getElementById("render")
);

/* 使用数组 */

/* jsx中使用js, jsx中使用数组, <!-- 最好有使用index, 不然会报警告 --> */
var names = ['aaa', 'bbb', 'ccc'];
var namesHtml = [<h1>h1...</h1>, <h2>h2...</h2>];
ReactDOM.render(
    <div>
        {
            names.map(function (name, index) {
                return <div key={index}>hello, {name}</div>
            })
        }
    </div>
    ,
    document.getElementById("array")
);
/* 这里会将数组数据连起来, 这里没有index, 会警告, 不过不影响 */
ReactDOM.render(
    <div>
        {namesHtml}
    </div>,
    document.getElementById("htmlArray")
);

/* 组件开发 */

/* 组件类的第一个字母必须大写，否则会报错，比如HelloMessage不能写成helloMessage。另外，组件类只能包含一个顶层标签，否则也会报错。 */
/* var HelloMsg = React.createClass({
    render: function() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}); */
/* class HelloMsg extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
} */
// Functional component , 单纯的ui, 没有 state, 没有ref, 仅仅一个构造函数
const HelloMsg = (props) => (
    // 注意这边 props 是传入函式的参数，因此取用 props 不用加 this
    <h1>Hello, {props.name}</h1>
);
ReactDOM.render(
    <HelloMsg name="xiaoyu"></HelloMsg>
    ,
    document.getElementById("component")
);

/* 遍历子元素, this.props.children获取到所有子元素, React.Children.map遍历 */
/* this.props.children可能有3种可能值 undefined: 没有子node, object: 仅仅一个子node, array: 多个子node */
/* var ChildNode = React.createClass({
    render: function() {
        return (
            <ol>
                {
                    // React.Children 工具类, 还有很多工具方法, 参见文档
                    React.Children.map(this.props.children, function(child) {
                        return (
                            <li>{child}</li>
                        );
                    })
                }
            </ol>
        );
    }
}); */
/* class ChildNode extends React.Component {

    // 这里为了方便, 没有 constructor, 因为没有设置props 

    render() {
        return (
            <ol>
                {
                    // React.Children 工具类, 还有很多工具方法, 参见文档
                    React.Children.map(this.props.children, function(child) {
                        return (
                            <li>{child}</li>
                        );
                    })
                }
            </ol>
        );
    }
} */
const ChildNode = (props) => (
    <ol>
        {
            // React.Children 工具类, 还有很多工具方法, 参见文档
            React.Children.map(props.children, function(child) {
                return (
                    <li>{child}</li>
                );
            })
        }
    </ol>
);
ReactDOM.render(
    <ChildNode>
        <div>test childNode div1</div>
        <div>test childNode div2</div>
    </ChildNode>,
    document.getElementById("childNode")
);

/* 参数校验 */

/* getDefaultProps()设置props的默认值 */
/* var ValidNode = React.createClass({
    render: function() {
        return (
            <h1>{this.props.title}</h1>
        );
    },
    propTypes: {
        title: React.PropTypes.string.isRequired// 必须, 且为string类型
    },
    getDefaultProps : function () {
        return {
          title : 'Hello World'
        };
    },
}); */
/* class ValidNode extends React.Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
} */
const ValidNode = (props) => (
    <h1>{props.title}</h1>
);
ValidNode.propTypes = {
    title: React.PropTypes.string.isRequired// 必须, 且为string类型
};
ValidNode.defaultProps = {
    title : 'Hello World'
};
var data = 123;
/* 此时会有警告, 但不影响 -- warning: Failed propType: Invalid prop `title` of type `number` supplied to `MyTitle`, expected `string`. */
ReactDOM.render(
    <ValidNode title={data}>
    </ValidNode>
    ,
    document.getElementById("paramValidation")
);

/* find a DOM node 找到真实的dom */

/* var TrueDom = React.createClass({
    render: function() {
        return (
            <div>
                <input type="text" ref="textInput" />
                <input type="button" value="click to focus" onClick={this.handleClick} />
            </div>
        );
    },
    handleClick: function() {
        // onclick 事件保证了只有虚拟dom插入document后才会使用this.refs属性, 就像放入到了 lifeCycle方法componentDidMount中 
        this.refs.textInput.focus();
    }
}); */
class TrueDom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        // 与 ES5 React.createClass({}) 不同的是 component 内自定义的方法需要自行绑定到 this context, 如果去掉, 会找不到相应的refs
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <div>
                <input type="text" ref="textInput" />
                <input type="button" value="click to focus" onClick={this.handleClick} />
            </div>
        );
    }
    handleClick() {
        this.refs.textInput.focus();
    }
}
ReactDOM.render(
    <TrueDom></TrueDom>
    ,
    document.getElementById("trueDom")
);

/* 状态 this.state */

/* var MyState = React.createClass({
    getInitialState: function() {
        // 定义初始状态的state, getInitialState 方法用于定义初始状态，也就是一个对象，这个对象可以通过 this.state 属性读取 
        return {
            liked: false
        };
    },
    render: function() {
        var text = this.state.liked ? "like" : "还没有开始喜欢";
        // 样式: 第一重大括号表示这是 JavaScript 语法，第二重大括号表示样式对象 
        return (
            <p onClick={this.handleClick}>你<span style={{color: "red"}} >{text}</span>这里(点击切换)</p>
        );
    },
    handleClick: function() {
        // 改变state
        this.setState({
            liked: !this.state.liked
        });
    }
}); */
class MyState extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            liked: false
        };
        
    }
    render() {
        var text = this.state.liked ? "like" : "还没有开始喜欢";
        // 样式: 第一重大括号表示这是 JavaScript 语法，第二重大括号表示样式对象 
        return (
            <p onClick={this.handleClick}>你<span style={{color: "red"}} >{text}</span>这里(点击切换)</p>
        );
    }
    handleClick() {
        this.setState({
            liked: !this.state.liked
        });
    }
}
ReactDOM.render(
    <MyState></MyState>
    ,
    document.getElementById("myState")
);

/* 表单 */

/* var Form = React.createClass({
    getInitialState: function() {
        return {
            value: "hello"
        };
    },
    handleChange: function(event) {// 处理变化事件, 注意有方法参数: event, event.target.value 读取用户输入的值 
        this.setState({
            value: event.target.value
        });
    },
    render: function() {
        // this.props 表示那些一旦定义，就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性。 
        var value = this.state.value;
        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange} />
                <p>{value}</p>
            </div>
        );
    }
}); */
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "hello"
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {// 有event参数, 否则报错: ... is changing a controlled input of type text to be uncontrolled
        this.setState({
            value: event.target.value
        });
    }
    render() {
        // this.props 表示那些一旦定义，就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性。 
        var value = this.state.value;
        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange} />
                <p>{value}</p>
            </div>
        );
    }
}
ReactDOM.render(
    <Form></Form>
    ,
    document.getElementById("form")
);   

/* 组件生命周期 */
/* 
组件生命周期分为(对于虚拟dom来说):

Mounting：正在插入真实 DOM
Updating：正在被重新渲染
Unmounting：正在移出真实 DOM

React 为每个状态都提供了两种处理函数: will, did

componentWillMount() 虚拟dom插入真是dom前
componentDidMount() 后
componentWillUpdate(object nextProps, object nextState) 虚拟dom将要被重新渲染前
componentDidUpdate(object prevProps, object prevState) 后
componentWillUnmount() 虚拟dom将要移出真是dom前, 没有之后

此外，React 还提供两种特殊状态的处理函数

componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用
*/

/* var Hello = React.createClass({
    getInitialState: function () {
      return {
        opacity: 1.0
      };
    },
  
    componentDidMount: function () {
        // 设定 定时器 
      this.timer = setInterval(function () {
        var opacity = this.state.opacity;
        opacity -= .05;
        if (opacity < 0.1) {
          opacity = 1.0;
        }
        this.setState({
          opacity: opacity
        });
      }.bind(this), 100);// 每隔100ms, 就重新设置组件的透明度，从而引发重新渲染 
      // 回调函数一定要加.bind(this)方法，原因是：在setInterval()中定义的回调函数，是在同步代码执行完后，随着事件触发来异步执行的，
      // 此时函数的上下文Context已经由定义该函数的Script文件变为全局变量，
      // 如果不通过bind(this)来指定由组件实例作为上下文的话，回调函数中的this会指向全局变量中的Window变量，显然不是我们想要的结果。

    },
  
    render: function () {
        // 样式: 写成 style="opacity:{this.state.opacity};" 是错误的 
      return (
        <div>
          Hello {this.props.name} <span style={{opacity: this.state.opacity}}>👈</span>
        </div>
      );
    }
}); */
class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 1.0
        };
        this.intervalCallback = this.intervalCallback.bind(this);// 放在这里bind
    }
    render() {
        return (
            <div>
              Hello {this.props.name} <span style={{opacity: this.state.opacity}}>👈</span>
            </div>
          );
    }
    componentDidMount() {
        this.timer = setInterval(this.intervalCallback, 100);// 需要bind到当前组件(默认是绑定到全局window), 否则报错: Cannot read property 'opacity' of undefined

    }
    intervalCallback() {
        var opacity = this.state.opacity;
        opacity -= .05;
        if (opacity < 0.1) {
            opacity = 1.0;
        }
        this.setState({
            opacity: opacity
        });
    }
}
ReactDOM.render(
<Hello name="world"/>,
document.getElementById("lifeCycle")
);

/* 另一个更详细的 生命周期demo */

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      console.log('constructor');
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        name: 'Mark',
      }
    }
    handleClick() {
      this.setState({'name': 'Zuck'});// 触发redraw, 一次运行willupdate, didupdate
    }
    componentWillMount() {
      console.log('componentWillMount');
    }
    componentDidMount() {
      console.log('componentDidMount');
    }
    componentWillReceiveProps() {
      console.log('componentWillReceiveProps');
    }
    componentWillUpdate() {
      console.log('componentWillUpdate');
    }
    componentDidUpdate() {
      console.log('componentDidUpdate');
    }
    componentWillUnmount() {
      console.log('componentWillUnmount');
    }
    render() {
      return (
        <div onClick={this.handleClick}>Hi, {this.state.name}</div>
      );
    }
  }
  
  ReactDOM.render(<MyComponent />, document.getElementById('lifeCycle2'));


/* Ajax */

// var $ = require('jquery'); // 通过npm使用jq报错, 存疑
var UserGist = React.createClass({
    getInitialState: function() {
      return {
        username: '',
        lastGistUrl: ''
      };
    },
  
    componentDidMount: function() {
      $.get(this.props.source, function(result) {
        var lastGist = result[0];
        if (this.isMounted()) {
          this.setState({
            username: lastGist.owner.login,
            lastGistUrl: lastGist.html_url
          });
        }
      }.bind(this));// 若不通过.bind(this)指定示例作为上下文的话，当回调函数执行时上下文Context会被设置为全局变量，这时候this就会指向Window变量。 
    },
  
    render: function() {
      return (
        <div>
          {this.state.username}'s last gist is
          <a href={this.state.lastGistUrl}>here</a>.
        </div>
      );
    }
  });
  
  ReactDOM.render(
    <UserGist source="https://api.github.com/users/octocat/gists" />,
    document.getElementById("ajaxDemo")
  );

  /* 事件处理, 使用onChange处理表单数据, 一个小小demo: todoListApp */

const TodoListCmp = (props) => (
    <ul>
        {
            props.items.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))
        }
    </ul>
);
class TodoListApp extends React.Component {
    constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			items: [],
			text: '',
		}
	}
	onChange(event) {
    	this.setState({// 这是一种获取表单内容的方法, 另一种方法是借助 refs属性
            text: event.target.value
        });
	}
	handleSubmit(event) {
        event.preventDefault();// 取消事件的默认动作(默认会刷新)。自定义提交动作的话, 一般加上
        // 添加一个item到list
    	const nextItems = this.state.items.concat(
            [
                {
                    text: this.state.text, 
                    id: Date.now()
                }
            ]
        );
    	const nextText = '';
    	this.setState({
            items: nextItems, 
            text: nextText
        });
	}
	render() {
	    return (
	      <div>
	        <h3>TODO todoList/官方</h3>
	        <TodoListCmp items={this.state.items} />
	        <form onSubmit={this.handleSubmit}>
	          <input onChange={this.onChange} value={this.state.text} />
	          <button>{'添加第 #' + (this.state.items.length + 1) + '个'}</button>
	        </form>
	      </div>
	    );
	}
}
ReactDOM.render(<TodoListApp />, document.getElementById('todoList'));

const MyOwnList = (props) => (
    <ol>
        {
            props.items.map(
                (item) => (
                    <li key={item.id}>{item.value}</li>
                )
            )
        }
    </ol>
);
class MyOwnListApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    render() {
        return (
            <div>
                <h3>MyOwnListApp</h3>
                <MyOwnList items={this.state.items}></MyOwnList>
                <form onSubmit={this.onSubmit}>
                    <input type="text"/>
                    <button >submit</button>
                </form>
            </div>
        );
    }
    onSubmit(event) {
        event.preventDefault();
        /* this.state.items.push([{// 这样子ui不会自动redraw
            id: Date.now(),
            value: event.target[0].value
        }]); */
        this.setState({// 现在才会auto redraw
            items: this.state.items.concat([{
                id: Date.now(),
                value: event.target[0].value
            }])
        });
        event.target[0].value = '';// 清空
    }
}
ReactDOM.render(<MyOwnListApp/>, document.getElementById("todoMyown"));

/* Refs 与表单处理, demo: markdownEditor */

class MarkdownEditor extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.rawMarkup = this.rawMarkup.bind(this);
		this.state = {
			value: 'Type some *markdown* here!',
		}
	}
	handleChange() {
	    this.setState({value: this.refs.textarea.value});
	}
	// 将使用者输入的 Markdown 语法 parse 成 HTML 放入 DOM 中，React 通常使用 virtual DOM 作为和 DOM 沟通的中介，不建议直接由操作 DOM。故使用时的属性为 dangerouslySetInnerHTML
	rawMarkup() {
	    const md = new Remarkable();
	    return { __html: md.render(this.state.value) };
	}
	render() {
	    return (
	      <div className="MarkdownEditor">
	        <h3>Input</h3>
	        <textarea
	          onChange={this.handleChange}
	          ref="textarea"
	          value={this.state.value} />
	        <h3>Output</h3>
	        <div
	          className="content"
	          dangerouslySetInnerHTML={this.rawMarkup()}/>
	      </div>
	    );
	}
}

ReactDOM.render(<MarkdownEditor />, document.getElementById('markdownEditor'));