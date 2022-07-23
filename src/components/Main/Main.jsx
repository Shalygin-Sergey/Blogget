import Layout from '../Layout/';
import Tabs from './Tabs/';
import List from './List/';
import React from 'react';


export const Main = () => {
  return (
    <main>
      <Layout>
        <Tabs />
        <List />
      </Layout>
    </main>
  );
};
