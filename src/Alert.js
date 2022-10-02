import PropTypes from 'prop-types';
import React from 'react';

const Alert = ({ children, ...others }) => {
  return (
    <div {...others}>
      {children}
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Alert };
