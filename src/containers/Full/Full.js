import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import SignUp from '../../views/SignUp/SignUp';
import Dashboard from '../../views/Dashboard/Dashboard';

class Full extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    return (
      <div className="app">
        <div className="app-body">
          <main className="main">
            <Switch>
              <Route path='/' exact={true} component={SignUp}/>
              <Route path='/dashboard' exact={true} render={ () => <Dashboard {...this.props} />}/>
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}
export default Full;