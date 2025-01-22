'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { ThemeType } from './ThemeToggle.types';
import { DarkIcon, LightIcon } from '@/components/ui/Icons';

import styles from './ThemeToggle.module.scss';

export function ThemeToggle() {
  // Hooks
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Effects
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handlers
  const handleThemeSwitch = () => {
    if (theme === ThemeType.Light) {
      setTheme(ThemeType.Dark);
    } else if (theme === ThemeType.Dark) {
      setTheme(ThemeType.Light);
    }
  };

  if (!mounted) {
    return <div className={styles.placeholder} />;
  }

  return (
    <button className={styles.button} onClick={handleThemeSwitch}>
      {theme === ThemeType.Light || theme === undefined ? (
        <DarkIcon />
      ) : (
        <LightIcon />
      )}
    </button>
  );
}
