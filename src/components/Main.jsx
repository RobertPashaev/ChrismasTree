import React from 'react';
import Header from './Header'
import About from './About';
import Popular from './Popular';
import Rewiews from './Rewiew';
import TabPanel from './TabPanel';
import Footer from './Footer';
import Catalog from './Catalog';

export default function Main() {
  return (
    <>
      <Header />
      <About />
      <Popular />
      <Rewiews />
      <TabPanel />
      <Footer />
    </>
  );
}
