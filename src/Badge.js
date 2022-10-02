import PropTypes from 'prop-types';
import React from 'react';

const Badge = ({ children, ...others }) => {
  return (
    <span {...others}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Badge };
