import React, { Fragment, useContext, useEffect, Suspense } from 'react';
import { Store } from './Store';

import { IAction, IEpisode } from './interfaces';

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

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

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favorites.includes(episode);

    let dispatchObj = {
      type: 'ADD_FAV',
      payload: episode,
    };

    if (episodeInFav) {
      const favWithoutEpisode = state.favorites.filter(
        (fav: IEpisode) => fav.id !== episode.id
      );

      dispatchObj = { type: 'REMOVE_FAV', payload: favWithoutEpisode };
    }

    return dispatch(dispatchObj);
  };

  // console.log(state);

  return (
    <Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode!</p>
        </div>
        <div>Favorite(s) : {state.favorites.length}</div>
      </header>
      <Suspense fallback={<h2>Loading...</h2>}>
        <section className="episode-layout">
          <EpisodesList
            toggleFavAction={toggleFavAction}
            episodes={state.episodes}
            favorites={state.favorites}
          />
        </section>
      </Suspense>
    </Fragment>
  );
}

export default App;
