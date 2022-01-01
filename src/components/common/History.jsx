import React, { Component } from 'react'
import { Container,Table } from 'react-bootstrap'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';

class History extends Component {
//     constructor({match}){
//         super(); 
//         this.state={
//              id:match.params.id,
//              AllData:[],
//         }
//    }
//    componentDidMount(){

//     axios.get(AppUrl.AttendenceDetails(this.state.id)).then(response =>{

//          this.setState({AllData:response.data});         

//     }).catch(error=>{

//     });
// }
    render() {
        // const data=this.state.AllData;
        // const View=data.map((data,i)=>{
        //     return( <div  key={i.toString()} >
  
        //         </div>
        //     )
        // });
        return (
            <>
            <Container>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Date</th>
      <th>In Time</th>
      <th>Out Time</th>
      <th>In Reason</th>
      <th>Out Reason</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
        <tr>
        <td>1</td>
        <td>Jacob</td>
        <td>hh</td>
        <td>@fat</td>
        <td>Jacob</td>
        <td>Thorntoasdasd asdas asdas asdas asdas asdas asdas n</td>
        <td>@fat</td>
        </tr>
  </tbody>
</Table>
            </Container>
            </>
        )
    }
}

export default History
