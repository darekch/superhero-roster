'use client';

import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';

import { Props } from './Filters.types';
import styles from './Filters.module.scss';

export function Filters({ id }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <h2 className={styles.title}>Search</h2>
        <div className={styles.sectionContent}>
          <Input
            name='search'
            value=''
            placeholder='Search...'
            onChange={() => {}}
          />
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Type</h2>
        <div className={styles.sectionContent}>
          <Checkbox
            name='checkbox-heroes'
            value=''
            label='Heroes'
            onChange={() => {}}
          />
          <Checkbox
            name='checkbox-villains'
            value=''
            label='Villains'
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
