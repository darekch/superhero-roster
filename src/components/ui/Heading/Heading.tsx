import { Props } from './Heading.types';

import styles from './Heading.module.scss';

export function Heading({ children }: Props) {
  return <h1 className={styles.heading}>{children}</h1>;
}
