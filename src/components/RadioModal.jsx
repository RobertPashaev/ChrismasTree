import React, { useState, useEffect } from 'react';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import { Box, Typography } from '@mui/joy';

export default function RadioModal({ data, onPriceChange, onDimension, dimensions }) {
  const [values, setValues] = useState({
    height: data.prices[0].height + ' см',
    diameter: data.dimensions[0].radius + ' см',
  });
  const [selectedPrice, setSelectedPrice] = useState(data.prices[0].price);

  const getPrice = (values) => {
    const { height } = values;
    const priceObj = data.prices.find((price) => price.height === height);
    if (priceObj) {
      const price = priceObj.price;
      return price;
    }
    return null;
  };

  const handleChange = (groupId, value) => {
    setValues((prevValues) => {
      const newValues = { ...prevValues, [groupId]: value };
      if (groupId === 'height') {
        const dimensionObj = data.dimensions.find(
          (dimension) => dimension.height === value.replace(' см', '')
        );
        if (dimensionObj) {
          newValues.diameter = dimensionObj.radius + ' см';
        }
      } else if (groupId === 'diameter') {
        const dimensionObj = data.dimensions.find(
          (dimension) => dimension.radius === value.replace(' см', '')
        );
        if (dimensionObj) {
          newValues.height = dimensionObj.height + ' см';
        }
      }
      const height = newValues.height.replace(' см', '');
      const newPrice = getPrice({ ...newValues, height });
      setSelectedPrice(newPrice);
      onPriceChange(newPrice);
      onDimension({
        height: newValues.height.replace(' см', ''),
        diameter: newValues.diameter.replace(' см', ''),
      });
      return newValues;
    });
  };

  const radioGroups = [
    {
      id: 'height',
      label: 'Высота:',
      options: data.prices.map((price) => price.height + ' см'),
    },
    {
      id: 'diameter',
      label: 'Диаметр:',
      options: data.dimensions.map((dimension) => dimension.radius + ' см'),
    },
    {
      id: 'fastenings',
      label: 'Крепления:',
      options: [data.branch],
      defaultValue: data.branch,
    },
  ];

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap={2}
      textAlign={'center'}
      alignItems={'center'}
    >
      {radioGroups.map(({ id, label, options, defaultValue }) => (
        <Box
          key={id}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 'fit-content',
          }}
        >
          <Typography fontWeight='lg' fontSize='sm'>
            {label}
          </Typography>
          <RadioGroup
            orientation='horizontal'
            aria-labelledby={id}
            name={id}
            value={values[id] || defaultValue || ''}
            onChange={(event) => handleChange(id, event.target.value)}
            sx={{
              minHeight: 30,
              padding: '4px',
              borderRadius: '12px',
              bgcolor: 'neutral.softBg',
              '--RadioGroup-gap': '4px',
              '--Radio-actionRadius': '8px',
            }}
          >
            {options.map((option) => (
              <Radio
                key={option}
                color='neutral'
                value={option}
                disableIcon
                label={option}
                variant='plain'
                sx={{
                  px: 1,
                  alignItems: 'center',
                }}
                slotProps={{
                  action: ({ checked }) => ({
                    sx: {
                      ...(checked && {
                        bgcolor: 'background.surface',
                        boxShadow: 'sm',
                        '&:hover': {
                          bgcolor: 'background.surface',
                        },
                      }),
                    },
                  }),
                }}
              />
            ))}
          </RadioGroup>
        </Box>
      ))}
    </Box>
  );
}
