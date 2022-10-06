import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './StarRating.css';

const StarRating = ({ className = '', stars, ...others }) => {
  const classNames = clsx('rf-starRating', className);

  const render = ['★', '★', '★', '★', '★'].fill('☆', stars, 5);

  return (
    <span className={classNames} {...others}>
      {render}
    </span>
  );
};

StarRating.propTypes = {
  className: PropTypes.string,
  stars: PropTypes.number.isRequired,
};

export { StarRating };
