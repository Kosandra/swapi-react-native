import React, {createContext, useRef} from 'react';

export const AppContext = createContext({peoplesApi: {}, moviesApi: {}});

const AppProvider = ({children}) => {
  const peoplesApi = useRef({});
  const moviesApi = useRef({});

  const setPeoples = ({peoples}) => {
    peoples.current = peoples;
  };

  const setMovies = ({movies}) => {
    movies.current = moviesApi;
  };

  const getPeoples = async () => {
    peoplesApi.current = await fetch('https://swapi.dev/api/people/').then(
      res => res.json(),
    );
  };

  const getFilms = async () => {
    moviesApi.current = await fetch('https://swapi.dev/api/films/').then(res =>
      res.json(),
    );
  };

  getFilms();
  getPeoples();

  return (
    <AppContext.Provider value={{peoplesApi, moviesApi, setPeoples, setMovies}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
