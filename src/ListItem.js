import PropTypes from 'prop-types';
import React from 'react';
import { css, cx } from '@emotion/css';

const ListItem = ({ children, className = '', ...others }) => {
  const styles = css``;
  const classNames = cx(styles, className);

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
