import React from 'react';
// import PropTypes from 'prop-types';

const Repos = ({match}) => (
  <div>
    <h3>
      Repos
    </h3>
    <h5>
      {match.params.name}
    </h5>
  </div>
);

/* Repos.propTypes = {
  params: PropTypes.Object,
}; */

export default Repos;
