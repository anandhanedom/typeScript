import React, { Fragment } from 'react';

import { IEpisode } from './interfaces';

const EpisodesList = (props: any) => {
  const { episodes, toggleFavAction, favorites } = props;

  return (
    <Fragment>
      {episodes.map((episode: IEpisode) => (
        <section key={episode.id} className="episode-box">
          <img
            src={episode.image.medium}
            alt={`Rick and Morty ${episode.name}`}
          />
          <div>{episode.name}</div>
          <section style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              Season : {episode.season} Number : {episode.number}
            </div>
            <button
              type="button"
              onClick={() => toggleFavAction(episode)}
              style={{
                border: '1px solid black',
                background: '#fff',
                fontSize: '15px',
                fontWeight: 500,
              }}
            >
              {favorites.find((fav: IEpisode) => fav.id === episode.id)
                ? 'Unfav'
                : 'Fav'}
            </button>
          </section>
        </section>
      ))}
    </Fragment>
  );
};

export default EpisodesList;
