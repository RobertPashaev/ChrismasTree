import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography style={{ whiteSpace: 'pre-line', fontSize: '1.2em' }}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography
        sx={{
          marginTop: '100px',
          textAlign: 'center',
          fontSize: '4em',
          fontFamily: 'Roboto',
        }}
      >
        Информация о покупке
      </Typography>
      <Box
        id='info'
        sx={{ flexGrow: 1, bgcolor: '#e7e6e6', display: 'flex', height: 225 }}
      >
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs example'
          sx={{ borderRight: 1, borderColor: 'divider', width: '44vw' }}
        >
          <Tab label='Доставка' {...a11yProps(0)} sx={{ fontSize: '1.2em' }} />
          <Tab label='Оплата' {...a11yProps(1)} sx={{ fontSize: '1.2em' }} />
          <Tab
            label='Условия возврата'
            {...a11yProps(2)}
            sx={{ fontSize: '1.2em' }}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography sx={{ fontSize: '1.1em', fontFamily: 'Roboto' }}>
            Наш склад находится по адресу: г. Новосибирск, ул. Фабричная 17 к5 и
            Фабрчиная 17 стр51. Мы отгружаем товар в: Будние дни: с 9:00 до
            18:00 Суббота: с 10:00 до 18:00 Воскресенье: выходной.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography sx={{ fontSize: '1.1em', fontFamily: 'Roboto' }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae qui iste consectetur officiis modi reiciendis numquam
            minus tempore! Id Желательно за товаром приезжать заранее и не
            позднее 30 минут до закрытия склада, чтобы весь процесс получения
            был оперативный.
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography sx={{ fontSize: '1.1em', fontFamily: 'Roboto' }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae qui iste consectetur officiis modi reiciendis numquam
            minus tempore! Id Воскресенье: выходной.
          </Typography>
        </TabPanel>
      </Box>
    </>
  );
}
