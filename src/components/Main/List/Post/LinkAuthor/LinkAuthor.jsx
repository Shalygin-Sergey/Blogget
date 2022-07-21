/* eslint-disable react/prop-types */
import style from './LinkAuthor.module.css';

export const LinkAuthor = (props) => {
  return (
    <>
      <a className={style.linkAuthor} href="#author">
        {props.author}
      </a>
    </>
  );
};