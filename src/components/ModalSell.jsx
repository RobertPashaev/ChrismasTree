import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/modal.css';


export default function FormSell() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_daaqfom',
        'template_97dh8tr',
        form.current,
        'b4obcp2X-FryQP0cP'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('OK');
        },
        (error) => {
          console.log(error.text);
          console.log('Error');
        }
      );
  };

  return (
    <form className='form_container' ref={form} onSubmit={sendEmail}>
      <label className='label_order'>Имя</label>
      <input className='input_order' type='text' name='user_name' />
      <label className='label_order'>Фамилия</label>
      <input className='input_order' type='email' name='user_email' />
      <label className='label_order'>Номер телефона</label>
      <input className='input_order' type='email' name='user_number' />
      <label className='label_order'>Адрес доставки</label>
      <input className='input_order' type='email' name='user_address' />
      <label className='label_order'>Комментарии к заказу</label>
      <textarea className='text_order' name='message' />
      <input className='submit_order' type='submit' value='Оформить заказ' />
    </form>
  );
};

