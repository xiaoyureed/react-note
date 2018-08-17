import $ from 'jquery';

let tmp;

$.ajax({
  url: 'resources/data/data.json',
  type: 'GET',
  async: false, // 非异步
  dataType: 'json',
  success(data) {
    console.log(data);
    tmp = data.xiaoyu;// 这里传入的已经是数组了
  },
});

const state = {
  data: tmp,
  content: {
    data: tmp[0].details[0],
    latest: tmp[0].details[0],
  },
};
export default state;
