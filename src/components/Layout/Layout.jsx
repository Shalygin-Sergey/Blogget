import style from './Layout.module.css';
import React from 'react';

export const Layout = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};
