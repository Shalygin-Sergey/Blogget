/* eslint-disable react/prop-types */
import style from './Date.module.css';
import formatDate from '../../../../../utils/formatDate';


export const Date = (props) => {
  console.log(style);
  return (
    <>
      <time className={style.date} dateTime={props.date}>
        {formatDate(props.date)}
      </time>
    </>
  );
};