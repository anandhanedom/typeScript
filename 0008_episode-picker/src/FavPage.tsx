import React, { useContext, Fragment, Suspense } from 'react';

//Store
import { Store } from './Store';

//Actions
import { toggleFavAction } from './Actions';

//interfaces
import { IEpisodeProps } from './interfaces';

//Components
const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

const FavPage = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favorites,
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

export default FavPage;
