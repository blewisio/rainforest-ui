import PropTypes from 'prop-types';
import React from 'react';
import { css, cx } from '@emotion/css';

const StarRating = ({ className = '', stars, ...others }) => {
  const styles = css`
    color: rgb(42, 68, 146);
    font-size: 2rem;
  `;

  const classNames = cx(styles, className);

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
