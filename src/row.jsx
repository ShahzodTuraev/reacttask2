import React from "react";
import './flowerStyle.css'
class Row extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          title: 'Web brain'
    
        }
    }
    render(){
        const {data} = this.props;
        const plus = () => {
            if (this.state.count < 10) this.setState({ count: this.state.count + 1 });
          };
          const minus = () => {
            if (this.state.count > 1) this.setState({ count: this.state.count - 1 });
          };

        return(
            <div className="container">
                <div className="product_box">
                    <img className="flower_img" src={data.src} alt="flower" />
                <div className="heading_box">
                    <h1 className="heading">{data.title}</h1>
                    <div className="id_box">
                        <p className="id_text">SKU:</p>
                        <p className="id_num">{data.id}</p>
                    </div>
                </div>
                </div>
                
                <p className="price_box">
                    ${data.price}.00
                </p>
                <div className="quantity_box">
                    <button onClick={minus} className="btn_minus">-</button>
                    <p className="count">{this.state.count}</p>
                    <button onClick={plus} className="btn_plus">+</button>
                </div>
                <p className="total_text">${this.state.count * data.price}.00</p>
                <img src="./images/Delete.png" alt="icon" className="delete" />
            </div>
        )
    }
}
export default Row;