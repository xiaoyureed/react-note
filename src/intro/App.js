import React, { Component } from 'react';
import $ from 'jquery';
import ShowPanel from './component/ShowPanel';
import css from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      data: {},
      initHint: false, // 是否显示输入提示信息
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const that = this;

    $.ajax({
      url: 'resources/data/data.json',
      type: 'GET',
      // async: false, // 非异步
      dataType: 'json',
      success(data) {
        console.log(data);
        that.setState({
          items: ['0000'],
          data, // 对象
        });
      },
    });
  }

  onClick(proxy) {
    // proxy.target.firstElementChild.hidden = true;
   /*  const { items, data, initHint } = this.state;
    this.setState({
      items,
      data,
      initHint: false,
    }); */
  }

  onChange(event) {
    const { items, data } = this.state;
    this.setState(
      {
        items: items.concat(event.target.value),
        data,
      },
    );
  }

  render() {
    const { items, data, initHint } = this.state;

    // 根据最后一个item的id找到responses
    // items[items.length-1]
    const opts = data.xiaoyu ? (
      data.xiaoyu.filter(itemToBlock => (
        itemToBlock.id === items[items.length - 1]
      ))[0].responses
    ) : null;

    return (
      <div className={css.container}>
        <div className={css.header}>
          xiaoyureed
        </div>
        <ShowPanel items={items} data={data} />
        <div>
          <select onClick={this.onClick} onChange={this.onChange}>
            <option disabled selected id="initOptHint">
              说点什么吧...
            </option>
            {
              opts ? (
                opts.map((opt, optIndex) => (
                  <option key={optIndex} value={opt.xiaoyuNext}>
                    {opt.content}
                  </option>
                ))
              ) : null
            }
            {/* {
              initHint ? (
                <option disabled selected id="initOptHint">
                  说点什么吧...
                </option>
              ) : (
                opts ? (
                  opts.map((opt, optIndex) => (
                    <option key={optIndex} value={opt.xiaoyuNext}>
                      {opt.content}
                    </option>
                  ))
                ) : null
              )
            } */}
          </select>
        </div>
      </div>
    );
  }
}

export default App;
