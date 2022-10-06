import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './List.css';

const List = ({ children, className = '', ...others }) => {
  const classNames = clsx('rf-list', className);

  return (
    <ul {...others} className={classNames}>
      {children}
    </ul>
  );
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { List };
