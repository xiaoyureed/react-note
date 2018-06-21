 /* text/babel表示为jsx语法， 和js不兼容 */
/* ReactDOM.render()函数: 将jsx模板转为html并渲染到真实dom中, jsx语法: html直接写在js中（遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析） */
ReactDOM.render(
    <h1>xxx</h1>,
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
/* 这里会将数组数据连起来 */
ReactDOM.render(
    <div>
        {namesHtml}
    </div>,
    document.getElementById("htmlArray")
);

/* 组件开发 */

/* 组件类的第一个字母必须大写，否则会报错，比如HelloMessage不能写成helloMessage。另外，组件类只能包含一个顶层标签，否则也会报错。 */
var HelloMsg = React.createClass({
    render: function() {
        return <h1>Hello, {this.props.name}</h1>;
    }
});
ReactDOM.render(
    <HelloMsg name="xiaoyu"></HelloMsg>
    ,
    document.getElementById("component")
);

/* 遍历子元素, this.props.children获取到所有子元素, React.Children.map遍历 */
/* this.props.children可能有3种可能值 undefined: 没有子node, object: 仅仅一个子node, array: 多个子node */
var ChildNode = React.createClass({
    render: function() {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function(child) {
                        return (
                            <li>{child}</li>
                        );
                    })
                }
            </ol>
        );
    }
});
ReactDOM.render(
    <ChildNode>
        <div>test childNode div1</div>
        <div>test childNode div2</div>
    </ChildNode>,
    document.getElementById("childNode")
);

/* 参数校验 */

/* getDefaultProps()设置props的默认值 */
var ValidNode = React.createClass({
    render: function() {
       /*  React.Children.map(this.props.child, function(child){

        }); */
        return (
            <h1>{this.props.title}</h1>
        );
    },
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    getDefaultProps : function () {
        return {
          title : 'Hello World'
        };
    },
});
var data = 123;
/* 此时会有警告, warning: Failed propType: Invalid prop `title` of type `number` supplied to `MyTitle`, expected `string`. */
ReactDOM.render(
    <ValidNode title={data}>
    </ValidNode>
    ,
    document.getElementById("paramValidation")
);

/* find a DOM node 找到真实的dom */

var TrueDom = React.createClass({
    render: function() {
        return (
            <div>
                <input type="text" ref="textInput" />
                <input type="button" value="click to focus" onClick={this.handleClick} />
            </div>
        );
    },
    handleClick: function() {
        /* onclick 事件保证了只有虚拟dom插入document后才会使用this.refs属性 */
        this.refs.textInput.focus();
    }
});
ReactDOM.render(
    <TrueDom></TrueDom>
    ,
    document.getElementById("trueDom")
);

/* 状态 this.state */
var MyState = React.createClass({
    getInitialState: function() {
        /* 定义初始状态, getInitialState 方法用于定义初始状态，也就是一个对象，这个对象可以通过 this.state 属性读取 */
        return {
            liked: false
        };
    },
    render: function() {
        var text = this.state.liked ? "like" : "还没有开始喜欢";
        /* 样式: 第一重大括号表示这是 JavaScript 语法，第二重大括号表示样式对象 */
        return (
            <p onClick={this.handleClick}>你<span style={{color: "red"}} >{text}</span>这里(点击切换)</p>
        );
    },
    handleClick: function() {
        this.setState({
            liked: !this.state.liked
        });
    }
});
ReactDOM.render(
    <MyState></MyState>
    ,
    document.getElementById("myState")
);

/* 表单 */

var Form = React.createClass({
    getInitialState: function() {
        return {
            value: "hello"
        };
    },
    handleChange: function(event) {
        /* 处理变化事件, 注意有方法参数: event, event.target.value 读取用户输入的值 */
        this.setState({
            value: event.target.value
        });
    },
    render: function() {
        /* this.props 表示那些一旦定义，就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性。 */
        var value = this.state.value;
        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange} />
                <p>{value}</p>
            </div>
        );
    }
});
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

var Hello = React.createClass({
    getInitialState: function () {
      return {
        opacity: 1.0
      };
    },
  
    componentDidMount: function () {
        /* 设定 定时器 */
      this.timer = setInterval(function () {
        var opacity = this.state.opacity;
        opacity -= .05;
        if (opacity < 0.1) {
          opacity = 1.0;
        }
        this.setState({
          opacity: opacity
        });
      }.bind(this), 100);/* 每隔100ms, 就重新设置组件的透明度，从而引发重新渲染 */
      /* 回调函数一定要加.bind(this)方法，原因是：在setInterval()中定义的回调函数，是在同步代码执行完后，随着事件触发来异步执行的，
      此时函数的上下文Context已经由定义该函数的Script文件变为全局变量，
      如果不通过bind(this)来指定由组件实例作为上下文的话，回调函数中的this会指向全局变量中的Window变量，显然不是我们想要的结果。*/

    },
  
    render: function () {
        /* 样式: 写成 style="opacity:{this.state.opacity};" 是错误的 */
      return (
        <div style={{opacity: this.state.opacity}}>
          Hello {this.props.name}
        </div>
      );
    }
  });
  
  ReactDOM.render(
    <Hello name="world"/>,
    document.getElementById("lifeCycle")
  );


/* Ajax */

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
      }.bind(this));/* 若不通过.bind(this)指定示例作为上下文的话，当回调函数执行时上下文Context会被设置为全局变量，这时候this就会指向Window变量。 */
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