import PropTypes from 'prop-types';
import React from 'react';
import { css, cx } from '@emotion/css';

const List = ({ children, className = '', ...others }) => {
  const styles = css``;
  const classNames = cx(styles, className);

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
