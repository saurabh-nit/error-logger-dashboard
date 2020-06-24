import React, { Component } from 'react';
import { getAllErrors } from '../../actions/appActions';

import './dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorList: []
    }
  };

  componentDidMount() {
    let errorList = this.state.data;
    getAllErrors().then((response) => {
      if(response.code === 'SUCCESS') {
        errorList = response.errorList;
        this.setState({errorList});
      }
    })

    if(this.props.socket){
      this.props.socket.on('dataFromServer', data=> {
        console.log('NOTIFICATION DATA:', data);
        errorList.unshift(data);
        this.setState({errorList});
      });
    }
  };

  errorRow = (data, key) => {
    return (
      <tr key={key}>
        <td>{data.msg}</td>
        <td>{data.url}</td>
        <td>{data.line}</td>
        <td>{data.col}</td>
        <td>{new Date(data.createdAt).toLocaleDateString()} at {new Date(data.createdAt).toLocaleTimeString()}</td>
        <td>{data.userAgent}</td>
        <td>{data.error}</td>
      </tr>
    )
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          Error Logger
        </div>
        <div className="dashboard-body">
          <table className="table table-responsive table-bordered table-striped table-sm table-responsive-lg">
            <thead className="thead-dark">
            <tr>
              <th className="table-lg-col">Error Message</th>
              <th className="table-md-col">Url</th>
              <th className="table-sm-col">Line</th>
              <th className="table-sm-col">Col</th>
              <th className="table-lg-col">Occured On</th>
              <th className="table-lg-col">User Agent</th>
              <th className="table-lg-col">Specification</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.errorList.length > 0 ?
                this.state.errorList.map((list, key) => {
                  return this.errorRow(list, key);
                })
                :
                <tr>
                  <td>'Hurray!! No Errors'</td>
                </tr>
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Dashboard;
