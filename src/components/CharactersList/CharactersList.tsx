import Link from 'next/link';

import { CharacterCard } from '@/components/CharacterCard';

import { Props } from './CharactersList.types';
import styles from './CharactersList.module.scss';

export function CharactersList({ id }: Props) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href='/character/1'>
            <CharacterCard id='' />
          </Link>
        </li>

        <li className={styles.listItem}>
          <CharacterCard id='' />
        </li>

        <li className={styles.listItem}>
          <CharacterCard id='' />
        </li>
        <li className={styles.listItem}>
          <CharacterCard id='' />
        </li>

        <li className={styles.listItem}>
          <CharacterCard id='' />
        </li>

        <li className={styles.listItem}>
          <CharacterCard id='' />
        </li>

        <li className={styles.listItem}>
          <CharacterCard id='' />
        </li>

        <li className={styles.listItem}>
          <CharacterCard id='' />
        </li>
      </ul>
    </div>
  );
}
