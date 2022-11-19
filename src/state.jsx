import React, {createRef} from 'react';
import {students} from './mock'
import './table.css'

class State extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            students: students,
            name: '',
            selected: {},
        }
    }
    render(){
        const inputRef = createRef();
        const inputRefAddress = createRef();
        const inputRefAge = createRef();
        const inputRefUniv = createRef();
        const inputRe = createRef();

        const onAdd=()=>{
            console.log(inputRef.current.value);
            this.setState({students: [
                ...this.state.students,
                {id: this.state.students.length + 1, 
                name: inputRef.current.value, 
                address: inputRefAddress.current.value, 
                age: inputRefAge.current.value, 
                university: inputRefUniv.current.value, 
                status:inputRe.current.value}
            ]});
        };

        const filter =({target:{value, name}})=>{
            let arrr = students.filter((vl)=>
            `${vl[name]}`.toLocaleLowerCase().includes(value.toLocaleLowerCase())
            );
            this.setState({students: arrr});
        };
        
        const onDelete = (id)=> {
            console.log(id);
           let arrr = this.state.students.filter(vl=>vl.id !== id);
           this.setState({students: arrr})
        };

        const onEdit=(value)=>{
            console.log(value);
            this.setState({selected: value})
        };
        const onCancel=(value)=>{
            this.setState({selected: null})
            
        };
        const onSave =(value)=>{
            let arrr = this.state.students.map((value)=>this.state.selected?.id===value.id?this.state.selected:value);
            this.setState({students: arrr, selected: null});
        };

        const onChangeName =({target:{value}})=>{
            this.setState((state)=> {
                return {selected: {...state.selected, name: value}}});
        };

        const onChangeAddress =({target:{value}})=>{
            this.setState((state)=> {
                return {selected: {...state.selected, address: value}}});
        };

        const onChangeAge =({target:{value}})=>{
            this.setState((state)=> {
                return {selected: {...state.selected, age: value}}});
        };
        const onChangeUniversity =({target:{value}})=>{
            this.setState((state)=> {
                return {selected: {...state.selected, university: value}}});
        };

        const onChangeStatus =({target:{value}})=>{
            this.setState((state)=> {
                return {selected: {...state.selected, status: value}}});
        };


        return(
            <div>
                <div>
                    {/* FILTER INPUTS */}
                    <div className="search_box">
                        <h2>Search:</h2>
                        <input className='search_in' onChange={filter} type="number" name='id' placeholder='search ID' />
                        <input className='search_in' onChange={filter} type="text" name='name' placeholder='search NAME' />
                        <input className='search_in' onChange={filter} type="text" name='address' placeholder='search COUNTRY' />
                        <input className='search_in' onChange={filter} type="number" name='age' placeholder='search AGE' />
                        <input className='search_in' onChange={filter} type="text" name='university' placeholder='search UNIVERSITY' />
                        <input className='search_in' onChange={filter} type="text" name='status' placeholder='search STATUS' />
                    </div>
        
                    {/* ADD INPUTS */}
                    <div className="search_box">
                        <h2>Add:</h2>
                        <input className='search_in' type="text" name='name' placeholder='Add NAME' ref={inputRef} />
                        <input className='search_in' type="text" name='address' placeholder='Add ADDRESS' ref={inputRefAddress} />
                        <input className='search_in' type="number" name='age' placeholder='Add AGE' ref={inputRefAge} />
                        <input className='search_in' type="text" name='university' placeholder='Add UNIVERSITY' ref={inputRefUniv} />
                        <input className='search_in' type="text" name='status' placeholder='Add STATUS' ref={inputRe} />
                        <button onClick={onAdd} className='add_btn'>Add</button>
                    </div>

                    <div className="table_wrapper">
                        <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>COUNTRY</th>
                                <th>AGE</th>
                                <th>UNIVERSITY</th>
                                <th>STATUS</th>
                                <th>OPERATORS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.students.map((st)=>{
                                let check = this.state.selected?.id === st.id;
                                return(
                                    <tr key={st.id}>
                                        <td>{st.id}</td>
                                        
                                        <td>
                                            {check ? (
                                            <input onChange={onChangeName} value={this.state.selected.name}/>
                                             ): (st.name)}
                                        </td>
                                        <td>
                                            {check ? (
                                            <input onChange={onChangeAddress} value={this.state.selected.address}/>
                                             ): (st.address)}
                                        </td>
                                        <td>
                                            {check ? (
                                            <input onChange={onChangeAge} value={this.state.selected.age}/>
                                             ): (st.age)}
                                        </td>
                                        <td>
                                            {check ? (
                                            <input onChange={onChangeUniversity} value={this.state.selected.university}/>
                                             ): (st.university)}
                                        </td>
                                        <td>
                                            {check ? (
                                            <input onChange={onChangeStatus} value={this.state.selected.status}/>
                                            ): (st.status)}
                                        </td>
                                    
                                        <td className='btn_box'>
                                            {check?(
                                                <>
                                                    <button onClick={()=> onCancel(st.id)}>cancel</button>
                                                    <button onClick={()=> onSave(st)}> save</button>
                                                </>
                                            ):(
                                                <>
                                                    <button onClick={()=> onDelete(st.id)}>delete</button>
                                                    <button onClick={()=> onEdit(st)}> edit</button>
                                                </>
                                                
                                            )}
                                            
                                        </td>
                                </tr>
                                );
                                })}

                            <tr></tr>
                        </tbody>
                    </table>
                    </div>
                    
                    
                </div>
            </div>
        )
    }

}
export default State