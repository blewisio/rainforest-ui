import PropTypes from 'prop-types';
import React from 'react';
import { css, cx } from '@emotion/css';

const TextField = ({ className = '', ...others }) => {
  const styles = css`
    padding: 10px;
  `;
  const classNames = cx(styles, className);

  return (
    <input type="text" className={classNames} {...others} />
  );
};

TextField.propTypes = {
  className: PropTypes.string,
};

export { TextField };
