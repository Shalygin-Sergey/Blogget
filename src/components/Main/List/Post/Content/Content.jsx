/* eslint-disable react/prop-types */
import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text';

export const Content = ({title, author}) => {
  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text as='a' size={18} tsize={24} className={style.linkPost} href="#post">
          {title}
        </Text>
      </Text>
      <Text
        As='a'
        color='orange'
        className={style.linkAuthor}
        href="#author"
        size={12}
        tsize={14}
      >
        {author}
      </Text>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};