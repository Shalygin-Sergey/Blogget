/* eslint-disable react/prop-types */
import style from './Rating.module.css';

export const Rating = (props) => {
  console.log(style);
  return (
    <div className={style.rating}>
      <button className={style.up} aria-label='Увеличить рейтинг' />
      <p className={style.ups}>{props.ups}</p>
      <button className={style.down} aria-label='Уменьшить рейтинг' />
    </div>
  );
};