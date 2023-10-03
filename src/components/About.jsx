import React from 'react';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import '../styles/about/about.css';
import { Link } from 'react-scroll';

export default function About(props) {
  return (
    <>
      <div className='about'>
        <h2 className='about__title'>Искусственные ёлки Премиум класса</h2>
        <span className='about__span'>*Безопасны для детей и животных</span>
        <h4 className='about__subtitle'>Доставка по всей России</h4>
        <Link to='popular' smooth={true} duration={500}>
          <ExpandCircleDownIcon
            className='about__btn'
            style={{ fontSize: 65, color: 'white' }}
          />
        </Link>
      </div>
    </>
  );
}
