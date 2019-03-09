import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12 table-responsive">
            <h2>Contextual Classes</h2>
            <p>Contextual classes can be used to color table rows or table cells. The classes that can be used are:
              .active, .success, .info, .warning, and .danger.</p>
            <table className="table table-responsive table-sm">
              <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Default</td>
                <td>Defaultson</td>
                <td>def@somemail.com</td>
              </tr>
              <tr className="success">
                <td>Success</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr>
              <tr className="danger">
                <td>Danger</td>
                <td>Moe</td>
                <td>mary@example.com</td>
              </tr>
              <tr className="info">
                <td>Info</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
              <tr className="warning">
                <td>Warning</td>
                <td>Refs</td>
                <td>bo@example.com</td>
              </tr>
              <tr className="active">
                <td>Active</td>
                <td>Activeson</td>
                <td>act@example.com</td>
              </tr>
              </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default Table;
