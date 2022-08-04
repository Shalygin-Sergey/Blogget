import React, { useEffect } from 'react';

export const useToken = (state) => {
  const [token, setToken] = React.useState(state);

  useEffect(() => {
    if (location.pathname.includes('/auth')) {
      const token = new URLSearchParams(location.hash.substring(1)).get('access_token');

      setToken(token);
    }

    if (localStorage.getItem('barer')) {
      setToken(localStorage.getItem('barer'));
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('barer', token);
    }
  }, [token]);

  return [token];
};