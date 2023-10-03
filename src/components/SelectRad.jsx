import React, { useState } from 'react';
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const optionsRadius = [
  { id: { min: 0, max: 100 }, label: 'До 100см' },
  { id: { min: 100, max: 120 }, label: 'От 100см до 120см' },
  { id: { min: 120, max: 140 }, label: 'От 120см до 140см' },
  { id: { min: 140, max: 160 }, label: 'От 140см до 160см' },
  { id: { min: 160, max: 180 }, label: 'От 160см до 180см' },
  { id: { min: 180, max: Infinity }, label: 'От 180см' },
];

export default function SelectRad(props) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id='demo-select-small-label'>Диаметр</InputLabel>
      <Select
        labelId='demo-select-small-label'
        id='demo-select-small'
        value={props.radius}
        label='Age'
        onChange={props.changeRad}
        sx={{ width: '120px' }}
      >
        {optionsRadius.map(({ id, label }) => (
          <MenuItem key={label} value={id}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
