import React from "react";
import './flowerStyle.css'
class Row extends React.Component{
    render(){
        return(
            <div className="container">
                <table>
                    <tr className="tablehead" >
                        <td>Product Id</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                    </tr>
                    <tr>
                        <td>
                        1995751877966
                        </td>
                        <td>
                            $119.00
                        </td>
                        <td>
                            2
                        </td>
                        <td>
                            $238.00
                        </td>
                    </tr>
                    <tr>
                        <td>
                        19957518757065
                        </td>
                        <td>
                            $139.00
                        </td>
                        <td>
                            6
                        </td>
                        <td>
                            $834.00
                        </td>
                    </tr>
                    <tr>
                        <td>
                        1995751877786
                        </td>
                        <td>
                            $179.00
                        </td>
                        <td>
                            9
                        </td>
                        <td>
                            $1,611.00
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Row;