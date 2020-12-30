import React from 'react';

interface IState {
  episodes: [];
  favorites: [];
}

const INITIAL_STATE: IState = {
  episodes: [],
  favorites: [],
};

export const Store = React.createContext<IState>(INITIAL_STATE);

function reducer() {
  //pass
}

export function StoreProvider(props: any): JSX.Element {
  return (
    <Store.Provider value={INITIAL_STATE}>{props.children}</Store.Provider>
  );
}
