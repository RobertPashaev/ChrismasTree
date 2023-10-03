import React, { useState } from 'react';
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const optionsHeigth = [
  { id: { min: 120, max: 120 }, label: '120' + ' см' },
  { id: { min: 150, max: 150 }, label: '150' + ' см' },
  { id: { min: 160, max: 160 }, label: '160' + ' см' },
  { id: { min: 180, max: 180 }, label: '180' + ' см' },
  { id: { min: 190, max: 190 }, label: '190' + ' см' },
  { id: { min: 210, max: 210 }, label: '210' + ' см' },
  { id: { min: 220, max: 220 }, label: '220' + ' см' },
  { id: { min: 240, max: 240 }, label: '240' + ' см' },
  { id: { min: 250, max: 250 }, label: '250' + ' см' },
  { id: { min: 270, max: 270 }, label: '270' + ' см' },
  { id: { min: 300, max: 300 }, label: '300' + ' см' },
];

export default function SelectHeight(props) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id='demo-select-small-label'>Высота</InputLabel>
      <Select
        labelId='demo-select-small-label'
        id='demo-select-small'
        value={props.height}
        label='Age'
        onChange={props.changeHeight}
        sx={{ width: '120px' }}
      >
        {optionsHeigth.map(({ id, label }) => (
          <MenuItem key={label} value={id}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
