import style from './Post.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './Image/Image';
import { Rating } from './Rating/Rating';
import { Date } from './Date/Date';
import Content from './Content/';
import {ReactComponent as DeleteImg} from './img/delete.svg';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;

  return (
    <li className={style.post}>
      {/* Создаем компонент потому что будем рендерить его через список пропсами */}
      <Image />
      <Content title={title} author={author} />
      {/* Рейтинг поста может изменятся */}
      <Rating ups={ups} />
      {/* Дата поста может изменятся */}
      <Date date={date} />

      <button className={style.delete}>
        {<DeleteImg className={style.delete} alt="remove-bag" />}
      </button>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};