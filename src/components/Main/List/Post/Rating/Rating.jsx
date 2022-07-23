/* eslint-disable react/prop-types */
import { Text } from '../../../../../UI/Text/Text';
import style from './Rating.module.css';

export const Rating = ({ups}) => {
  return (
    <div className={style.rating}>
      <button className={style.up} aria-label='Увеличить рейтинг' />
      <Text As='p' className={style.ups}>{ups}</Text>
      <button className={style.down} aria-label='Уменьшить рейтинг' />
    </div>
  );
};