import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className='container mx-auto flex items-center justify-end'>
        <a
          className={styles.descriptionLink}
          href='https://gist.github.com/piotrekskc/2909093d17a225f2c219a0e9c38256b5'
          target='_blank'
          rel='noreferrer'
        >
          <span>Senior NodeJS/ReactJS Superheroes Tech Test</span>
        </a>

        <div className={styles.separator}>|</div>

        <a
          className={styles.profileLink}
          href='https://www.linkedin.com/in/dariuszchec/'
          target='_blank'
          rel='noreferrer'
        >
          <span>Dariusz Chec</span>
        </a>
      </div>
    </footer>
  );
}
