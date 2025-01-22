import Link from 'next/link';

import { slugify } from '@/helpers';
import { NoResults } from '@/components/NoResults';
import { CharacterCard } from '@/components/CharacterCard';

import { Props } from './CharactersList.types';
import styles from './CharactersList.module.scss';

//
export function CharactersList({ superheroes }: Props) {
  const characters = () =>
    superheroes.map(({ id, name, image }) => {
      const pageLink = `/character/${slugify(name)}`;

      return (
        <li key={id} className={styles.listItem}>
          <Link href={pageLink}>
            <CharacterCard id={id} name={name} image={image} />
          </Link>
        </li>
      );
    });

  return (
    <div className={styles.wrapper}>
      {superheroes.length > 0 ? (
        <ul className={styles.list}>{characters()}</ul>
      ) : null}

      <NoResults />
    </div>
  );
}
