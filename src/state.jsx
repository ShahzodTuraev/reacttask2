import React from 'react';
import {student} from './mock'
import './table.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      data: student,
    }
  }
  render() {
    const onFilter = (e) => {
      console.log(e.target.value);
      let res = student.filter(value=> value.status.includes(e.target.value))
      this.setState({data: res})

    }
    const onDelete = (id) =>{
        console.log(id);
        let res = this.state.data.filter(value=>value.id !== id);
        this.setState({data: res})
    }


    return (
      <div>
        <input onChange={onFilter} type="text"  placeholder='filter'/>
        <table border={2} width={'80%'}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>ADDRESS</th>
                    <th>STATUS</th>
                    <th>DELETE</th>
                            
                </tr>
            </thead>
            <tbody>
            {this.state.data.length ? (
            this.state.data.map(({id, name, address, status})=>{
            return(
                        <tr>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{address}</td>
                            <td>{status}</td>
                            
                            <td>
                                <button onClick={()=>onDelete(id)}>delete</button>
                            </td>
                        </tr>
                    )
                })) : (
                    <tr >
                        <th colSpan={6}>
                            <h1>No data</h1>
                        </th>
                    </tr>
                    
                )
            }
            </tbody>
        </table>
      </div>
    )
  }
}
export default App;