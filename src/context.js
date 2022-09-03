import React, { useContext, useEffect, useReducer, useState } from 'react';

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions';
import reducer from './reducer';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
  hits: [],
  nbPages: 0,
  query: 'react',
  loading: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async () => {
    dispatch({ type: SET_LOADING });
    console.log(state);
    const res = await fetch(`${API_ENDPOINT}query=${state.query}`);
    const data = await res.json();

    dispatch({ type: SET_STORIES, payload: data });
  };

  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id });
  };

  useEffect(() => {
    fetchStories();
  }, [state.query]);

  return (
    <AppContext.Provider value={{ ...state, handleSearch, removeItem }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
