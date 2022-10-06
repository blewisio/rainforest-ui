import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = ({ children, className = '', ...others }) => {
  const classNames = clsx('rf-listItem', className);

  return (
    <li {...others} className={classNames}>
      {children}
    </li>
  );
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { ListItem };
