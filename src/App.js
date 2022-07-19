import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main';
import './index.css';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Main />
      </>
    </div>
  );
}

App.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

export default App;
