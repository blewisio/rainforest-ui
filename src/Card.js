import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useStyle } from './useStyle.js';

const cls = 'rf-card';

const Card = ({ children, className = '', ...others }) => {
  useStyle(cls, styles);
  const classNames = clsx(cls, className);

  return (
    <div {...others} className={classNames}>
      {children}
    </div>
  );
};

const styles = {
  padding: '20px',
  background: '#fff',
  border: '1px #bbb solid',
  boxShadow: '0px 5px 12px #ddd',
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Card };
