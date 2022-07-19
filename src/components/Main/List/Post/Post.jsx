import style from './Post.module.css';
import deleteImg from './img/delete.svg';
import PropTypes from 'prop-types';
import { Image } from './Image/Image';
import { LinkPost } from './LinkPost/LinkPost';
import { LinkAuthor } from './LinkAuthor/LinkAuthor';
import { Rating } from './Rating/Rating';
import { Date } from './Date/Date';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  console.log(title, author, ups, date);

  return (
    <li className={style.post}>
      {/* Создаем компонент потому что будем рендерить его через список пропсами */}
      <Image />

      <div className={style.content}>
        <h2 className={style.title}>
          {/* Title поста может изменятся */}
          <LinkPost title={title} />
        </h2>
        {/* Автор поста может изменятся */}
        <LinkAuthor author={author} />
      </div>
      {/* Рейтинг поста может изменятся */}
      <Rating ups={ups} />
      {/* Дата поста может изменятся */}
      <Date date={date} />

      <button className={style.delete}>
        <img src={deleteImg} className={style.delete} alt="remove-bag" />
      </button>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};