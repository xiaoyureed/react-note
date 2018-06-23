class HelloMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	// render 是唯一必须的方法，但如果是单纯 render UI 建议使用 Functional Component 写法，效能较佳且较简洁
	render() {
		return (
			<div>Hello {this.props.name}</div>
		)
	}
}
/**Functional Component写法:
 * 
 * const HelloMessage = (props) => (
	<div>Hello {props.name}</div>
    );
 */

// PropTypes 验证，若传入的 props type 不是 string 将会显示错误
HelloMessage.propTypes = {
  name: React.PropTypes.string,
}

// Prop 预设值，若对应 props 没传入值将会使用 default 值 Zuck
HelloMessage.defaultProps = {
 name: 'Zuck',
}

// ReactDOM.render(<HelloMessage name="Mark" />, document.getElementById('app'));
