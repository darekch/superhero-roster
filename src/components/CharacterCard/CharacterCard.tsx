import { Props } from './CharactersCard.types';

import styles from './CharacterCard.module.scss';

export function CharacterCard({ id }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img
          className={styles.picture}
          src='https://cdn.marvel.com/content/1x/348abm_com_crd_01.jpg'
          alt=''
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>
          <span>Abomination</span>
        </h3>
      </div>
    </div>
  );
}
