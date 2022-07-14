import style from './Header.module.css';
import React from 'react';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';

const Header = () => {
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <Heading text={'Блог тигра в мире IT'} />
          <Search />
          <Auth auth={false} />
        </div>
      </Layout>
    </header>
  );
};

export default Header;
