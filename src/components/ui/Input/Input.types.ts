import { ChangeEvent } from 'react';

export type Props = {
  id?: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
};
