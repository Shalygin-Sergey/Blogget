import style from './Layout.module.css';
import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => (
  <div className={style.container}>
    {children}
  </div>
);


Layout.prototype = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ])
};
