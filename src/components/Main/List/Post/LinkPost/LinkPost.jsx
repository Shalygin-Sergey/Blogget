/* eslint-disable react/prop-types */
import style from './LinkPost.module.css';
import PropTypes from 'prop-types';


export const LinkPost = (props) => {
  console.log(props);
  return (
    <>
      <a className={style.linkPost} href="#post">
        {props.title}
      </a>
    </>
  );
};

LinkPost.propTypes = {
  props: PropTypes.object,
};