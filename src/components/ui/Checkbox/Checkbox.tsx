'use client';

import { Props } from './Checkbox.types';
import styles from './Checkbox.module.scss';

export function Checkbox({ id, name, isChecked, label, onChange }: Props) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.labelText}>{label}</span>

      <label className={styles.label}>
        <input
          type='checkbox'
          id={id}
          name={name}
          checked={isChecked}
          className={styles.checkbox}
          onChange={onChange}
        />
        <span className='checkmark'></span>
      </label>
    </div>
  );
}
