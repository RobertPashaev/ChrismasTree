import React, { useState } from 'react';
import '../styles/header/header.css';
import { WhatsAppOutlined } from '@ant-design/icons';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import SaleBasket from './SaleBasket';
import ModalSale from './ModalSale';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showSaleBasket, setShowSaleBasket] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setShowSaleBasket(true);
  };

  const handleMouseLeave = () => {
    setShowSaleBasket(false);
  };

  return (
    <>
      <div className='header desktop-header'>
        <Link to='/' className='header__nav_logo'></Link>
        <nav className='header__nav'>
          <ul className='header__nav_ul'>
            <li className='header__nav_li'>
              <Link to='/Catalog' className='header__nav_li_select'>
                КАТАЛОГ
              </Link>
              <ul className='sub-menu'>
                <li className='sub-menu_li'>Литые елки</li>
                <li className='sub-menu_li'>Уличные елки</li>
                <li className='sub-menu_li'>Заснеженные елки</li>
                <li className='sub-menu_li'>Елки с лампочками</li>
                <li className='sub-menu_li'>Комбинированные елки</li>
              </ul>
            </li>
            <li className='header__nav_li'>КОНТАКТЫ</li>
            <ScrollLink
              to='info'
              smooth={true}
              duration={500}
              className='header__nav_li'
            >
              ДОСТАВКА И ОПЛАТА
            </ScrollLink>
          </ul>
          <Box
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{ height: '50px' }}
          >
            <ShoppingCartIcon
              className='header__nav_shop'
              style={{
                fontSize: 30,
                marginLeft: '50px',
                top: '25px',
                right: '150px',
              }}
            />
            {showSaleBasket && <SaleBasket setIsModalOpen={setIsModalOpen} />}
          </Box>
          {isModalOpen && <ModalSale setIsModalOpen={setIsModalOpen} />}
          <h3 className='header__nav_num'>
            <WhatsAppOutlined
              className='header__nav_svg'
              style={{ fontSize: 25 }}
            />
            +7-963-323-54-23
          </h3>
          <img className='header__nav_cop' />
        </nav>
      </div>
      <div className='header mobile-header'>
        <IconButton
          variant='outlined'
          color='neutral'
          onClick={() => setOpen(true)}
        >
          <Menu />
        </IconButton>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              ml: 'auto',
              mt: 1,
              mr: 1,
            }}
          >
            <Typography
              component='label'
              htmlFor='close-icon'
              fontSize='sm'
              fontWeight='lg'
              sx={{ cursor: 'pointer' }}
            >
              Закрыть
            </Typography>
            <Link to='/' className='header__nav_logo'></Link>
            <ModalClose id='close-icon' sx={{ position: 'initial' }} />
          </Box>
          <List
            size='lg'
            component='nav'
            sx={{
              flex: 'none',
              mt: 6,
              mb: 5,
              fontSize: 'xl',
              '& > div': { justifyContent: 'center' },
            }}
          >
            <ListItemButton>
              <Link to='/Catalog'>КАТАЛОГ</Link>
            </ListItemButton>

            <ListItemButton>КОНТАКТЫ</ListItemButton>
            <ListItemButton>ДОСТАВКА И ОПЛАТА</ListItemButton>
            <Box display={'flex'} flexDirection={'row'} marginTop={'30px'}>
              <WhatsAppOutlined
                className='header__nav_svg'
                style={{ fontSize: 25 }}
              />
              <Typography variant='h1'>+7-923-4213-32-23</Typography>
              <Box
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{ height: '50px' }}
              >
                <ShoppingCartIcon
                  className='header__nav_shop'
                  style={{
                    fontSize: 30,
                    marginLeft: '50px',
                    top: '25px',
                    right: '150px',
                  }}
                />
                {showSaleBasket && (
                  <SaleBasket setIsModalOpen={setIsModalOpen} />
                )}
              </Box>
            </Box>
          </List>
          <Box sx={{ px: 5, textAlign: 'center' }}></Box>
        </Drawer>
      </div>
    </>
  );
}
