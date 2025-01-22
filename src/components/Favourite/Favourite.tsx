'use client';

import { useSuperheroStore } from '@/hooks';
import { FavouriteIcon } from '@/components/ui/Icons/FavouriteIcon';

import { useCallback, useMemo } from 'react';

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
    [favouriteSuperheroesIds]
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
    [isFavourite]
  );

  return (
    <div className={styles.wrapper}>
      <button
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
