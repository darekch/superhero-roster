import Image from 'next/image';

import { Props } from './Character.types';
import styles from './Character.module.scss';

//
export function Character({ character }: Props) {
  const emptyLine = (value: string) => value || '-';

  const list = (list: string[] | undefined) => list?.join(', ') || '';

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.picture}>
          <Image
            className={styles.pictureImage}
            src={character.image}
            alt={character.name}
            width={450}
            height={450}
          />
        </div>

        <div className={styles.topContent}>
          <h1>
            <span>{character.name}</span>
          </h1>

          <div className={styles.description}>
            <p>{character.description}</p>
          </div>

          <div className={styles.details}>
            <div className={styles.detailsContainer}>
              <div className={styles.detailsLeftColumn}>
                <h2>
                  <span>Character facts</span>
                </h2>

                <div className={styles.detailsItem}>
                  <span>Score:</span>
                  <strong>{character.score}</strong>
                </div>

                <div className={styles.detailsItem}>
                  <span>Type:</span>
                  <strong>{character.type}</strong>
                </div>

                <div className={styles.detailsItem}>
                  <span>Universe:</span>
                  <strong>{character.universe}</strong>
                </div>

                <div className={styles.detailsItem}>
                  <span>Weakness:</span>
                  <strong>{emptyLine(list(character.weakness))}</strong>
                </div>

                <div className={styles.detailsItem}>
                  <span>Aliases:</span>
                  <strong>{list(character.aliases)}</strong>
                </div>
              </div>

              <div className={styles.detailsRightColumn}>
                <h2>
                  <span>Stats</span>
                </h2>

                {character.stats?.map(({ name, value }) => (
                  <div key={name} className={styles.detailsItem}>
                    <span>{name}:</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
