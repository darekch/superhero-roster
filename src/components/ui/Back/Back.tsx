'use client';

import { useRouter } from 'next/navigation';

import styles from './Back.module.scss';

//
export function Back() {
  // Hooks
  const router = useRouter();

  // Handlers
  const handleNavigateToPreviousPage = () => {
    router.back();
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={handleNavigateToPreviousPage}>
        <strong>&larr;</strong>
        <span>Back</span>
      </button>
    </div>
  );
}
