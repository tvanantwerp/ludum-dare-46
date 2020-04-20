import React from 'react';
import PropTypes from 'prop-types';

const Start = ({ show }) => {
  return (
    <div style={{ display: show ? 'block' : 'none' }}>
      <h1>Survive and Escape the Wilderness</h1>
      <p>
        You are lost in the woods with limited supplies and no sense of how to
        get out.
      </p>
      <p>
        You&apos;ll have to explore the wilderness and gather supplies during
        the day. Prepare for the harsh and dangerous night, and hope to find
        civilization the next day.
      </p>
      <p>Be careful: run out of supplies or stamina and you risk death.</p>
    </div>
  );
};

Start.propTypes = {
  show: PropTypes.bool,
};

export default Start;
