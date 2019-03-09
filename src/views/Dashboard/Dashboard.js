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
        errorList.push(data);
        this.setState({errorList});
      });
    }
  };

  errorRow = (data, key) => {
    return (
      <tr key={key}>
        <td>{data.error}</td>
        <td>{data.msg}</td>
        <td>{data.url}</td>
        <td>{data.line}</td>
        <td>{data.col}</td>
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
          <table className="table table-responsive table-bordered">
            <thead>
            <tr>
              <th className="table-lg-col">Error</th>
              <th className="table-lg-col">Error Message</th>
              <th className="table-md-col">url</th>
              <th className="table-sm-col">Line</th>
              <th className="table-sm-col">Col</th>
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