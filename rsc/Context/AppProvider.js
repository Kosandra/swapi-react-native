import React, {createContext, useEffect, useRef, useState} from 'react';

export const AppContext = createContext({peoplesState: {}, moviesState: {}});

const AppProvider = ({children}) => {

  const [peoplesState, setPeoplesState] = useState({  });
  const [moviesState, setMoviesState] = useState({});

  const getPeoples = async () => {
    setPeoplesState(
      await fetch('https://swapi.dev/api/people/').then(res => res.json()),
    );
  };

  const getFilms = async () => {
    setMoviesState(
      await fetch('https://swapi.dev/api/films/').then(res => res.json()),
    );
  };

  getFilms();
  getPeoples();

  return (
    <AppContext.Provider value={{moviesState, peoplesState}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
