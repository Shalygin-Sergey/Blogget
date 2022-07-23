import style from './Tabs.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import { assignId } from '../../../utils/generateRandomId';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import { debounceRaf } from '../../../utils/debounce';
import { Text } from '../../../UI/Text/Text';

export const Tabs = () => {
  const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);
  const [isDropDown, setIsDropDown] = React.useState(true);
  const [isItem, setIsItem] = React.useState('Главная');

  const LIST = [
    {value: 'Главная', Icon: HomeIcon},
    {value: 'Топ', Icon: TopIcon},
    {value: 'Лучшие', Icon: BestIcon},
    {value: 'Горячее', Icon: HotIcon},
  ].map(assignId);
  // function resize сработает если из  менится ширина
  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  };
  // Создаем хук эффект для вызова функции пересчета ширины экрана
  React.useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize); // реагирование на ресайз

    return () => {
      window.removeEventListener('resize', debounceResize); // убить прослушку
    };
  }, []); // пустой массив чтобы не повторялся вызов

  return (
    <div className={style.container}>
      {isDropDown && (
        <div className={style.wrapperBtn}>
          <button className={style.btn} onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
            {isItem}
            <ArrowIcon width={15} height={15} />
          </button>
        </div>
      )}
      {(isDropDownOpen || !isDropDown) && (
        <ul className={style.list} onClick={() => setIsDropDownOpen(false)}>
          { // нужно забрать из объекта данные для подстановки ID_1
            LIST.map(({value, id, Icon}) => (
              <Text As='li' className={style.item} key={id}>
                <button className={style.btn} onClick={() => setIsItem(value)}>
                  {value}
                  {Icon && <Icon width={30} height={30} />}
                </button>
              </Text>
            ))
          }
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};