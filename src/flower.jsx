import React from "react";
import Row from "./row.jsx"
import './index.css'
const flowers = [
  {
    src: './images/image_1.png',
    title: 'Barberton Daisy',
    id: '1995751877966',
    price: 119
  },
  {
    src: './images/image_2.png',
    title: 'Blushing Bromeliad',
    id: '19957518757065',
    price: 139
  },
  {
    src: './images/image_3.png',
    title: 'Aluminum Plant',
    id: '1995751877786',
    price: 179
  },
]
class Flower extends React.Component{
  render(){
    return(
      <div>
        <div className="row_header">
        <h1 className="headers product">Product</h1>
        <div className="row_comfort">
          <h1 className="headers price">Price</h1>
          <h1 className="headers quantity">Quantity</h1>
          <h1 className="headers total">Total</h1>
        </div>
        
        </div>
      <div className="wrapper">
      {
      flowers.map(value =>{
      return (
      <Row data={value} />
      )
      })
      }
      </div>

  </div>

)
}
}
export default Flower;