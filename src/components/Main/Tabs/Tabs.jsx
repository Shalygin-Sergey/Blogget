import style from './Tabs.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import { assignId } from '../../../utils/generateRandomId';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as EyeIcon} from './img/eye.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as PostIcon} from './img/post.svg';
import {ReactComponent as SaveIcon} from './img/save.svg';
import { debounceRaf } from '../../../utils/debounce';

export const Tabs = () => {
  const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);
  const [isDropDown, setIsDropDown] = React.useState(true);
  const LIST = [
    {value: 'Главная', Icon: EyeIcon},
    {value: 'Просмотренные', Icon: HomeIcon},
    {value: 'Сохраненные', Icon: PostIcon},
    {value: 'Мои посты', Icon: SaveIcon},
  ].map(assignId);

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
    handleResize();
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
            add item
            <ArrowIcon width={15} height={15} />
          </button>
        </div>
      )}
      {(isDropDownOpen || !isDropDown) && (
        <ul className={style.list} onClick={() => setIsDropDownOpen(false)}>
          { // нужно забрать из объекта данные для подстановки ID_1
            LIST.map(({value, id, Icon}) => (
              <li className={style.item} key={id}>
                <button className={style.btn} onClick={() => {}}>
                  {value}
                  {Icon && <Icon width={30} height={30} />}
                </button>
              </li>
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