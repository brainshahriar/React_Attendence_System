import React, { Component } from 'react'
import { Container,Table } from 'react-bootstrap'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';

class History extends Component {
    constructor({match}){
        super();
        this.state={
            id:match.params.id,
            Details:[]
        }
    }
    componentDidMount(){
        axios.get(AppUrl.AttendenceDetails(this.state.id)).then(response=>{
            this.setState({Details:response.data});
        }).catch(error=>{
        })
    }
    render() {

        const data=this.state.allData;
        const View=data.map((data,i)=>{
            return(
                <div  >
                        <tr>
                            <td>3</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Jacob</td>
                            <td>Thorntoasdasd asdas asdas asdas asdas asdas asdas n</td>
                            <td>@fat</td>
                        </tr>
                </div>
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
