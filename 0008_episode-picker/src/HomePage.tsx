import React, { Fragment, Suspense, useEffect, useContext } from 'react';

//Store
import { Store } from './Store';

//Actions
import { fetchDataAction, toggleFavAction } from './Actions';

//interfaces
import { IEpisodeProps } from './interfaces';

//Components
const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

const HomePage = () => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites,
  };

  return (
    <Fragment>
      <Suspense fallback={<h2>Loading...</h2>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </Suspense>
    </Fragment>
  );
};

export default HomePage;
