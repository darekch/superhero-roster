import Link from 'next/link';

import { CharacterCard } from '@/components/CharacterCard';

import { Props } from './CharactersList.types';
import styles from './CharactersList.module.scss';

//
export function CharactersList({ superheroes }: Props) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {superheroes.map(({ id, name, image }) => (
          <li key={id} className={styles.listItem}>
            <Link href={`/character/${id}`}>
              <CharacterCard id={id} name={name} image={image} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
