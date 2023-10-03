import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import './styles/App.css'
import Catalog from './components/Select';
import ModalSale from './components/ModalSale';

function App() {
const requestURL = 'http://localhost:3000/cat'

const xhr = new XMLHttpRequest()

xhr.open('GET', requestURL)
xhr.onload = () => {
  
}
xhr.send()


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/Home' element={<Main />}></Route>
      <Route path='/Catalog' element={<Catalog/>}></Route>
      <Route path ='/Order' element={<ModalSale/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;