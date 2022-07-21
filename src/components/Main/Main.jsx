import Layout from '../Layout/';
import Tabs from './Tabs/';
import List from './List/';
import React from 'react';
import {assignId, generateRandomId} from '../../utils/generateRandomId.js';

console.log(generateRandomId());

const LIST = [
  {value: 'Главная'},
  {value: 'Просмотренные'},
  {value: 'Сохраненные'},
  {value: 'Мои посты'},
].map(assignId);
// ID_1 выше мы вытащили из массива и сделали объект с 2мя ключами

export const Main = () => {
  const [list, setList] = React.useState(LIST);

  const addItem = () => {
    setList(list.concat(assignId({value: 'Новый пост'})));
  };

  return (
    <main>
      <Layout>
        <button onClick={addItem}>add item</button>
        <Tabs list={list} setList={setList} />
        <List />
      </Layout>
    </main>
  );
};
