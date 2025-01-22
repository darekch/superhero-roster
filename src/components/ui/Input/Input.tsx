'use client';

import { Props } from './Input.types';

import styles from './Input.module.scss';

export function Input({ id, name, value, placeholder, onChange }: Props) {
  return (
    <input
      type='text'
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      className={styles.input}
      onChange={onChange}
    ></input>
  );
}
