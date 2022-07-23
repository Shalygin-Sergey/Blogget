import style from './Logo.module.css';
import {ReactComponent as LogoImg} from './img/logo.svg';

export const Logo = () => {
  return (
    <a className={style.link} href="/">
      <LogoImg className={style.logo} alt="logo" />
    </a>
  );
};
