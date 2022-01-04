import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import AppUrl from "../../api/AppUrl";

class History extends Component {
  constructor({ match }) {
    super();
    this.state = {
      AllData: [],
      OutData:[]
    };
  }
  componentDidMount() {
    let id = this.props.user.id;
    axios.get(AppUrl.AttendenceDetails(id))
      .then((response) => {
        this.setState({ AllData: response.data });
      })
      .catch((error) => {});
      axios.get(AppUrl.AttendenceDetails2(id))
      .then((response) => {
        this.setState({ OutData: response.data });
      })
      .catch((error) => {});
  }

  render() {
    const data = this.state.AllData;
    const View = data.map((data, i) => {
      return (
        <tr key={i.toString()}>
          <td>{++i}</td>
          <td>{data.present_date}</td>
          <td>{data.present_time}</td>
          <td>{data.reason}</td>
          <td>On Time</td>
        </tr>
      );
    });


    const data2 = this.state.OutData;
    const View2 = data2.map((data2, i) => {
      return (
        <tr key={i.toString()}>
          <td>{++i}</td>
          <td>{data2.out_date}</td>
          <td>{data2.out_time}</td>
          <td>{data2.out_reason}</td>
          <td>On Time</td>
        </tr>
      );
    });
    return (
      <>
        <Container>
          <br />
          <br />
          <div className="col-md-12 row clearfix">
            <div className="col-md-6">
              <table className="table table-success table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>In Time</th>
                    <th>In Reason</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>{View}</tbody>
              </table>
            </div>
            <div className="col-md-6">
              <table className="table table-danger table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Out Time</th>
                    <th>Out Reason</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>{View2}</tbody>
              </table>
              
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default History;
