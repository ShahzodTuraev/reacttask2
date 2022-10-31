import React from "react";
import Row from "./row.jsx"

class Flower extends React.Component{
  render(){
    // const {data} = this.props;
    return(
     <div>
      <Row />
     
      {/* <img src="{data.img}" alt="logo" />
      <h2>
        {data.name} {data.id} {data.price}
      </h2> */}
     </div>
    )
  }
}
export default Flower;