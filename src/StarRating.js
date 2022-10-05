import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useStyle } from './useStyle.js';

const cls = 'rf-starRating';

const StarRating = ({ className = '', stars, ...others }) => {
  useStyle(cls, styles);
  const classNames = clsx(cls, className);

  const render = ['★', '★', '★', '★', '★'].fill('☆', stars, 5);

  return (
    <span className={classNames} {...others}>
      {render}
    </span>
  );
};

const styles = {
  color: 'rgb(42, 68, 146)',
  fontSize:' 2rem',
  cursor: 'default',
};

StarRating.propTypes = {
  className: PropTypes.string,
  stars: PropTypes.number.isRequired,
};

export { StarRating };
