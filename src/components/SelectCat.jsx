import React, { useState, useEffect } from 'react';
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const optionsCat = [
  { id: 'cast', label: 'Литые елки' },
  { id: 'steet', label: 'Уличные елки' },
  { id: 'lights', label: 'Елки с лампочками' },
  { id: 'snowy', label: 'Заснежные елки' },
  { id: 'combination', label: 'Комбинированные елки' },
  { id: 'tabletop', label: 'Настольные елки' },
];

export default function SelectCat(props) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id='demo-select-small-label'>Каталог</InputLabel>
      <Select
        labelId='demo-select-small-label'
        id='demo-select-small'
        value={props.category}
        label='Age'
        onChange={props.changeCategory}
        sx={{ width: '130px' }}
      >
        {optionsCat.map(({ id, label }) => (
          <MenuItem key={id} value={label}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
