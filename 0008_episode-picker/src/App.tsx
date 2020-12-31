import React, { Fragment, useContext, useEffect } from 'react';
import { Store } from './Store';

function App(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const url =
      'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(url);
    const dataJson = await data.json();

    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJson._embedded.episodes,
    });
  };

  console.log(state);

  return (
    <Fragment>
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode!</p>
    </Fragment>
  );
}

export default App;
