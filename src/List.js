import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useStyle } from './useStyle.js';

const cls = 'rf-list';

const List = ({ children, className = '', ...others }) => {
  useStyle(cls, styles);
  const classNames = clsx(cls, className);

  return (
    <ul {...others} className={classNames}>
      {children}
    </ul>
  );
};

const styles = {};

List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { List };
