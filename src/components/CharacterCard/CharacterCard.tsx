import Image from 'next/image';

import { Props } from './CharactersCard.types';
import styles from './CharacterCard.module.scss';

//
export function CharacterCard({ name, image }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Image
          className={styles.picture}
          src={image}
          alt={name}
          width={250}
          height={260}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>
          <span>{name}</span>
        </h3>
      </div>
    </div>
  );
}
