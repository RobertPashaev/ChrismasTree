import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

export default function SelectBtn({ onReset, onSearch }) {
  const handleResetClick = () => {
    onReset();
  };

  const handleSearchClick = () => {
    onSearch();
  };
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '25px',
        justifyContent: 'flex-end',
      }}
    >
      <Button
        size='md'
        variant={'outlined'}
        color='primary'
        onClick={handleSearchClick}
      >
        Поиск
      </Button>
      <Button
        size='md'
        variant={'outlined'}
        color='danger'
        onClick={handleResetClick}
      >
        Сбросить
      </Button>
    </Box>
  );
}
