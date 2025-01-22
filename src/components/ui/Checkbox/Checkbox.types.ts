import { ChangeEvent } from 'react';

export type Props = {
  id?: string;
  name?: string;
  label: string;
  isChecked: boolean;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
};
