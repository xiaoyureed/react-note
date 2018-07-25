import React from 'react';
import PropTypes from 'prop-types';
import css from './OutputUi.css';

const OutputUi = ({ html, onClick }) => (
  // <textarea className={`${css.output} form-control`} readOnly value={html} />
  // <div className={`${css.output}`}>
  //   <div dangerouslySetInnerHTML={{ __html: html }} />
  //   <div>
  //     <button type="button" className="btn btn-primary">
  //     xx
  //     </button>
  //   </div>
  // </div>

  <div className={`${css.container} panel panel-default`}>
    <div className="panel-heading">
      <span className={css.title}>
      html
      </span>
      <button onClick={onClick} type="button" className={`${css.button} btn btn-primary btn-sm`}>
        copy
      </button>
    </div>
    <div className="panel-body">
      <div id="htmlDiv" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </div>
);

OutputUi.propTypes = {
  html: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  // flag: PropTypes.number.isRequired,
};

export default OutputUi;
