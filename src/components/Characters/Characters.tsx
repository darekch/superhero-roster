'use client';

import { useEffect } from 'react';

import { useSuperheroStore } from '@/hooks';
import { Filters } from '@/components/Filters';
import { CharactersList } from '@/components/CharactersList';

import { Props } from './Characters.types';
import styles from './Characters.module.scss';

//
export function Characters({ characters }: Props) {
  // Hooks
  const { setSuperheroes, getFilteredSuperheroes } = useSuperheroStore();

  // Effects
  useEffect(() => {
    setSuperheroes(characters);
  }, [characters, setSuperheroes]);

  const superheroes = getFilteredSuperheroes();

  return (
    <section className={styles.wrapper}>
      <div className={styles.filtersContent}>
        <Filters />
      </div>

      <div className={styles.listContent}>
        <CharactersList superheroes={superheroes} />
      </div>
    </section>
  );
}
