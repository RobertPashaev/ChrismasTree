import React, { useState } from 'react';
import { FormControl } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const optionsBranch = [
  { id: '1', label: 'Отгибные' },
  { id: '2', label: 'Шарнирные' },
];

export default function SelectBranch(props) {
  return (
    <FormControl sx={{ m: 1, minWidth: 150 }} size='small'>
      <InputLabel id='demo-select-small-label'>Крепления веток</InputLabel>
      <Select
        labelId='demo-select-small-label'
        id='demo-select-small'
        value={props.branch}
        label='Age'
        onChange={props.changeBranch}
        sx={{ width: '180px' }}
      >
        {optionsBranch.map(({ id, label }) => (
          <MenuItem key={id} value={label}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
