import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main';
import './index.css';
import PropTypes from 'prop-types';
import {URL} from './api/const';
import {useToken} from './hooks/useToken';

function App() {
  const [token] = useToken('');
  console.log(token);

  React.useEffect(() => {
    if (!token) return;

    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      }
    }).then(response => response.json()).then(data => {
      console.log(data);
    });
  }, [token]);

  return (
    <div className="App">
      <>
        <Header token={token} />
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
