import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import AppUrl from "../../api/AppUrl";
import Historyloading from "../placeholder/Historyloading";

class History extends Component {
  constructor({ match }) {
    super();
    this.state = {
      AllData: [],
      OutData: [],
      isLoading:"",
      mainDiv:"d-none"
    };
  }
  componentDidMount() {
    let id = this.props.user.id;
    axios
      .get(AppUrl.AttendenceDetails(id))
      .then((response) => {
        this.setState({ AllData: response.data,isLoading:"d-none",
        mainDiv:""});
      })
      .catch((error) => {});
    axios
      .get(AppUrl.AttendenceDetails2(id))
      .then((response) => {
        this.setState({ OutData: response.data,isLoading:"d-none",
        mainDiv:""});
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
          <td className="text-success"><strong style={{ fontWeight:"700" }}>{data.present_time}</strong></td>
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
          <td className="text-danger">
              <strong style={{ fontWeight:"700" }}> {data2.out_time}</strong>
             </td>
        </tr>
      );
    });
    return (
      <>
      <Historyloading isLoading={this.state.isLoading} />
      <div className={this.state.mainDiv}>
        <Container>
          <br />
          <br />
          <div className="col-md-12 row clearfix">
            <div className="col-md-6">
              <h4>In Status</h4>
    
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
            <h4>Out Status</h4>
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
        </div>
      </>
    );
  }
}

export default History;
