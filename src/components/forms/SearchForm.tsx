import { TextField, type TextFieldProps } from '@mui/material';
import { type DOMAttributes, type PropsWithChildren } from 'react';

import './styles.scss';

type SearchFormProps = PropsWithChildren & {
  onSubmit: DOMAttributes<HTMLFormElement>['onSubmit'];
  onChange: TextFieldProps['onChange'];
  label?: TextFieldProps['label'];
};

export const SearchForm = ({ onSubmit, onChange, label, children }: SearchFormProps) => {
  return (
    <form className="search-container" onSubmit={onSubmit}>
      <TextField
        id="outlined-search"
        label={label}
        type="search"
        className="search-input"
        color="success"
        onChange={onChange}
      />
      {children}
    </form>
  );
};
