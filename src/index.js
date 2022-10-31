import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Flower from './flower';
// const items = [
//   {img: url(/images/image_1.png), name: 'Barberton Daisy', id: 1995751877966, price: 119.00 },
//   {img: url(/images/image_2.png), name: 'Blushing Bromeliad', id: 19957518757065, price: 139.00 },
//   {img: url(/images/image_3.png), name: 'Aluminum Plant', id: 1995751877786, price: 179.00 }
  
// ]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Flower />
    {/* {
      items.map((value) => {
        return <App data={value} />;
      })} */}
  </React.StrictMode>
);

