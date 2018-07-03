import React from 'react';
import style from './OutputUi.css';

const OutputUi = ({ html }) => (
  <textarea className={style.output} readOnly value={html} />
);

export default OutputUi;
