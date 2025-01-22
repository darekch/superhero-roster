'use client';

import { useSuperheroStore } from '@/hooks';

import styles from './NoResults.module.scss';

//
export function NoResults() {
  // Hooks
  const {
    searchQuery,
    filterByType,
    filterByUniverse,
    filterByFavourite,
    getFilteredSuperheroes,
  } = useSuperheroStore();

  const superheroes = getFilteredSuperheroes();

  if (
    superheroes.length === 0 &&
    (searchQuery !== '' ||
      filterByType.length > 0 ||
      filterByUniverse.length > 0 ||
      filterByFavourite)
  ) {
    return (
      <div className={styles.wrapper}>
        <p>No results found.</p>
      </div>
    );
  }
}
