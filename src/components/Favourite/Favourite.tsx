'use client';

import { useCallback, useMemo } from 'react';

import { useSuperheroStore } from '@/hooks';
import { FavouriteIcon } from '@/components/ui/Icons/FavouriteIcon';

import { Props } from './Favourite.types';
import styles from './Favourite.module.scss';

//
export function Favourite({ id }: Props) {
  // Hooks
  const {
    favouriteSuperheroesIds,
    addFavouriteSuperheroId,
    removeFavouriteSuperheroId,
  } = useSuperheroStore();

  // Value
  const isFavourite = useMemo(
    () => favouriteSuperheroesIds.includes(id),
    [id, favouriteSuperheroesIds]
  );

  // Handlers
  const handleToggleFavourite = useCallback(
    (isFavourite: boolean | undefined) => () => {
      if (isFavourite) {
        removeFavouriteSuperheroId(id);
      } else {
        addFavouriteSuperheroId(id);
      }
    },
    [id, addFavouriteSuperheroId, removeFavouriteSuperheroId]
  );

  return (
    <div className={styles.wrapper}>
      <button
        id='favourite-button'
        className={styles.button}
        onClick={handleToggleFavourite(isFavourite)}
      >
        <div className={isFavourite ? styles.filled : styles.empty}>
          <FavouriteIcon />
        </div>
      </button>
    </div>
  );
}
