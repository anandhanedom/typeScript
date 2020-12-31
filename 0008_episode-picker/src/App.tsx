import React, { Fragment, useContext, useEffect } from 'react';
import { Store } from './Store';

interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: {
    medium: string;
    original: string;
  };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  type: string;
  url: string;
}

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

  // console.log(state);

  return (
    <Fragment>
      <header className="header">
        <h1>Rick and Morty</h1>
        <p>Pick your favorite episode!</p>
      </header>
      <section className="episode-layout">
        {state.episodes.map((episode: IEpisode) => (
          <section key={episode.id} className="episode-box">
            <img
              src={episode.image.medium}
              alt={`Rick and Morty ${episode.name}`}
            />
            <div>{episode.name}</div>
            <section>
              Season : {episode.season} Number : {episode.number}
            </section>
          </section>
        ))}
      </section>
    </Fragment>
  );
}

export default App;
