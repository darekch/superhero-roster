import { Props } from './Characters.types';

import { Filters } from '@/components/Filters';
import { CharactersList } from '@/components/CharactersList';

import styles from './Characters.module.scss';

export function Characters({ id }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.filtersContent}>
        <Filters id='' />
      </div>

      <div className={styles.listContent}>
        <CharactersList id='' />
      </div>
    </section>
  );
}
