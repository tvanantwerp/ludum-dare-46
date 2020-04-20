import React from 'react';
import PropTypes from 'prop-types';

const Day = ({ show, context, update }) => {
  return (
    <div style={{ display: show ? 'block' : 'none' }}>
      <h1>Day {context.dayCount}</h1>
      <p>Stuff</p>
    </div>
  );
};

Day.propTypes = {
  show: PropTypes.bool,
  context: PropTypes.object,
  update: PropTypes.func,
};

export default Day;
