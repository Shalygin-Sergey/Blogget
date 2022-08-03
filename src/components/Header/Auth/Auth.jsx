import style from './Auth.module.css';
import React from 'react';
import {urlAuth} from '../../../api/auth';
import PropTypes from 'prop-types';
import {ReactComponent as Login} from './img/login.svg';
import {Text} from '../../../UI/Text/Text';
import {URL_API} from '../../../api/const';

// eslint-disable-next-line react/prop-types
export const Auth = ({ token }) => {
  const [auth, setAuth] = React.useState({});

  React.useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      }
    })
      .then(response => response.json())
      .then(({name, icon_img: iconimg}) => {
        const img = iconimg.replace(/\?.*$/, '');
        setAuth({name, img});
      });
  }, [token]);

  return (
    <div className={style.container}>
      {auth.name ? (
        <img src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`} />
      ) : (
        <Text As='a' href={urlAuth}>
          <Login className={style.svg} />
        </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
};