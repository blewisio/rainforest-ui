import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useStyle } from './useStyle.js';

const cls = 'rf-listItem';

const ListItem = ({ children, className = '', ...others }) => {
  useStyle(cls, styles);
  const classNames = clsx(cls, className);

  return (
    <li {...others} className={classNames}>
      {children}
    </li>
  );
};

const styles = {
  listStyleType: 'none',
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { ListItem };
