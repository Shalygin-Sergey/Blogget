import style from './List.module.css';

import Post from './Post';

export const List = () => {
  const postData = [
    {
      thumbnail: '',
      title: 'Title',
      author: 'nickname',
      ups: '24',
      date: '2022-02-24T09:45:00.000Z',
      id: '01_2',
    },
    {
      thumbnail: '',
      title: 'Title',
      author: 'nickname',
      ups: '24',
      date: '2022-02-24T09:45:00.000Z',
      id: '01_2',
    },
    {
      thumbnail: '',
      title: 'Title',
      author: 'nickname',
      ups: '24',
      date: '2022-02-24T09:45:00.000Z',
      id: '01_2',
    },
    {
      thumbnail: '',
      title: 'Title',
      author: 'nickname',
      ups: '24',
      date: '2022-02-24T09:45:00.000Z',
      id: '01_2',
    },
    {
      thumbnail: '',
      title: 'Title',
      author: 'nickname',
      ups: '24',
      id: '01_2',
      date: '2022-02-24T09:45:00.000Z',
    },
    {
      thumbnail: '',
      title: 'Title',
      author: 'nickname',
      ups: '24',
      date: '2022-02-24T09:45:00.000Z',
      id: '01_2',
    },
  ];

  return (
    <ul className={style.list}>
      {postData.map((postData, index) => (
        <Post postData={postData} key={index} />
      ))
      };
    </ul>
  );
};
