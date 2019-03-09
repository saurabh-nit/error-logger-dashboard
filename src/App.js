import React from 'react';
import { socketConnect } from 'socket.io-react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    if(this.props.socket){
      this.props.socket.on('dataFromServer', data=> {
        console.log('NOTIFICATION DATA:', data);
        let newNotify = this.state.data;
        newNotify.push(data);
        this.setState({data: newNotify});
      });
    }
  }

  sendMessage = () => {
    console.log('***', this)
    this.props.socket.emit('logError', 'Hello world!');
  }


  render() {


    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.data.map(el => {return <span key={el._id}>{el.message}, </span>})}</p>
          <button onClick={this.sendMessage} className="btn btn-success">
            Send!
          </button>
          <Table/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default socketConnect(App);