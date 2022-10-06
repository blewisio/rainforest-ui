import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ children, className = '', ...others }) => {
  const classNames = clsx('rf-card', className);

  return (
    <div {...others} className={classNames}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Card };
