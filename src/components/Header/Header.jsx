import style from './Header.module.css';
import React from 'react';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';
import PropTypes from 'prop-types';

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

Header.propTypes = {
  auth: PropTypes.bool,
};

export default Header;
