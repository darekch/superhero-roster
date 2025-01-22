import { clsx } from 'clsx';
import Link from 'next/link';

import { ThemeToggle } from '@/components/ui/ThemeToggle';

import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={clsx(styles.content)}>
        <div className={styles.headerTopbar}>
          <div className={clsx(styles.logoWrapper, 'container')}>
            <div></div>
            <Link href='/characters'>
              <h1 className={styles.brandLogo}>
                <span>Superhero</span>
              </h1>
            </Link>
            <div>
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className={styles.headerBottom}>
          <div className='flex mx-auto container justify-center'>
            <nav className={styles.navMenu}>
              <Link className={styles.navMenuItem} href='/characters'>
                <span>News</span>
              </Link>

              <Link className={styles.navMenuItem} href='/characters'>
                <span>Comics</span>
              </Link>

              <Link className={styles.navMenuItem} href='/characters'>
                <span>Characters</span>
              </Link>

              <Link className={styles.navMenuItem} href='/characters'>
                <span>Movies</span>
              </Link>

              <Link className={styles.navMenuItem} href='/characters'>
                <span>TV Shows</span>
              </Link>

              <Link className={styles.navMenuItem} href='/characters'>
                <span>Games</span>
              </Link>

              <Link className={styles.navMenuItem} href='/characters'>
                <span>Videos</span>
              </Link>

              <Link className={styles.navMenuItem} href='/characters'>
                <span>More</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
