import React from 'react';
import Button from '@material-ui/core/Button';

const CustomButton = ({ onClick, label }) => {
  return (
    <Button
      variant="contained"
      size="small"
      color="primary"
      onClick={onClick}
      style={{ marginTop: 5, marginBottom: 20 }}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
