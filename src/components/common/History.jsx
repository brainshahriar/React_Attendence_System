import React, { Component } from 'react'
import { Container,Table } from 'react-bootstrap'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';

class History extends Component {
    constructor({match}){
        super();
        this.state={
            AllData:[]
        }
    }
   componentDidMount(){
    let id = this.props.user.id;
    axios.get(AppUrl.AttendenceDetails(id)).then(response=>{
        this.setState({AllData:response.data});
    }).catch(error=>{
    })
}

    render() {
        const data=this.state.AllData;
        const View=data.map((data,i)=>{
            return(  
            <tr key={i.toString()}>
            <td>{++i}</td>
            <td>{data.present_date}</td>
            <td>{data.present_time}</td>
            <td>{data.out_time}</td>
            <td>{data.reason}</td>
            <td>{data.out_reason}</td>
            <td>Active</td>
            </tr>
         
            )
        });
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
    {View}
  </tbody>
</Table>
            </Container>
            </>
        )
    }
}

export default History
