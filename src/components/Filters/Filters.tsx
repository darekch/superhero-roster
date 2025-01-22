'use client';

import { ChangeEvent } from 'react';

import { useSuperheroStore } from '@/hooks';
import { SuperheroType, SuperheroUniverse } from '@/types';
import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';

import styles from './Filters.module.scss';

//
export function Filters() {
  // Hooks
  const {
    searchQuery,
    filterByType,
    filterByUniverse,
    setSearchQuery,
    setFilterByType,
    removeFilterByType,
    setfilterByUniverse,
    removeFilterByUniverse,
  } = useSuperheroStore();

  // Handlers
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    setSearchQuery(value);
  };

  const handleFilterByType =
    (type: SuperheroType) => (event: ChangeEvent<HTMLInputElement>) => {
      const { checked } = event?.target;

      if (checked) {
        setFilterByType(type);
      } else {
        removeFilterByType(type);
      }
    };

  const handleFilterByUniverse =
    (universe: SuperheroUniverse) => (event: ChangeEvent<HTMLInputElement>) => {
      const { checked } = event?.target;

      if (checked) {
        setfilterByUniverse(universe);
      } else {
        removeFilterByUniverse(universe);
      }
    };

  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <h2 className={styles.title}>Search</h2>
        <div className={styles.sectionContent}>
          <Input
            name='search'
            value={searchQuery}
            placeholder='Search...'
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Type</h2>
        <div className={styles.sectionContent}>
          <Checkbox
            label='Heroes'
            name='type-heroes'
            isChecked={filterByType.includes(SuperheroType.Hero)}
            onChange={handleFilterByType(SuperheroType.Hero)}
          />

          <Checkbox
            label='Villains'
            name='type-villains'
            isChecked={filterByType.includes(SuperheroType.Villain)}
            onChange={handleFilterByType(SuperheroType.Villain)}
          />
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Universe</h2>
        <div className={styles.sectionContent}>
          <Checkbox
            label='DC'
            name='universe-dc'
            isChecked={filterByUniverse.includes(SuperheroUniverse.DC)}
            onChange={handleFilterByUniverse(SuperheroUniverse.DC)}
          />

          <Checkbox
            label='Marvel'
            name='universe-marvel'
            isChecked={filterByUniverse.includes(SuperheroUniverse.Marvel)}
            onChange={handleFilterByUniverse(SuperheroUniverse.Marvel)}
          />
        </div>
      </div>
    </div>
  );
}
