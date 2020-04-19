import React from 'react';

import MorningControls from './MorningControls';

const Controls = () => {
  return (
    <>
      <MorningControls show={true} update={() => true} />
    </>
  );
};

Controls.propTypes = {};

export default Controls;
