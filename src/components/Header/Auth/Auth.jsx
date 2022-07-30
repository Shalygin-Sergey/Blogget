import style from './Auth.module.css';
import {urlAuth} from '../../../api/auth';
import PropTypes from 'prop-types';
import {ReactComponent as Login} from './img/login.svg';
import {Text} from '../../../UI/Text/Text';

// eslint-disable-next-line react/prop-types
export const Auth = ({ token }) => {
  return (
    <div className={style.container}>
      {token ? (
        token
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