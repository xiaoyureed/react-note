import React from 'react';
import PropTypes from 'prop-types';
import css from './ShowPanel.css';

const ShowPanel = ({ items, data }) => (
  <div className={css.showPanel}>
    {
      data.xiaoyu ? (
        data.xiaoyu.filter(itemToBlock => (
          items.includes(itemToBlock.id)
        )).map(roleItem => (// 迭代过滤出的对象
          roleItem.details.map(itemOuter => (// details是二维数组, 这里迭代外层
            itemOuter.map((itemInner, index) => (// 迭代内层
              <p>
                <span className={css.me} key={index}>
                  {itemInner}
                </span>
              </p>
            ))
          ))
        ))
      ) : null
    }
  </div>
);

ShowPanel.propTypes = {
  items: PropTypes.arrayOf(String).isRequired,
  data: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default ShowPanel;
