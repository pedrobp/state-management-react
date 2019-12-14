import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = ({ onChange }) => {
  return (
    <TextField
      style={{ marginTop: 5, marginBottom: 20 }}
      size="small"
      variant="outlined"
      onChange={onChange}
    />
  );
};
export default Input;
