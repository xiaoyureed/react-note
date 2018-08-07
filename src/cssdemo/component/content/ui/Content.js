import React from 'react';
import PropTypes from 'prop-types';
import stls from './Content.css';

const Content = ({ content }) => (
  <div className={stls.showPanel}>
    {
      content.map((item, index, arr) => (
        <div key={index}>
          {item}
          ,
          {index}
        </div>
      ))
    }
  </div>
);

Content.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Content;
