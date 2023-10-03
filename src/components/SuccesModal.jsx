import { Button, Result } from 'antd';
import React from 'react';

const SuccesModal = () => (
  <Result
    status="success"
    title="Ваш заказ успешно оформлен!"
    subTitle="Номер заказа: 2017182818828182881 Мы свяжемся с вами в ближайшее время!"
    extra={[
      <Button type="primary" key="console">
        Перейти на главную
      </Button>,
      <Button key="buy">В каталог</Button>,
    ]}
  />
);
export default SuccesModal;