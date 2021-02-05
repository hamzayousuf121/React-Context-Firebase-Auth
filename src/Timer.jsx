import logo from './logo.svg';
import './App.css';
import React from 'react';

// life cycle event

// mount - mounted
// update
// unmount
class Timer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      time: new Date() // 8:00:00
    }
    
    console.log("constructor",this.props.username)
   
    console.log("constructor - Timer")
    this.interval = null;
  }

  componentDidMount() {
    console.log("componentDidMount",this.props.username)
    console.log("component Did Mount - Timer")
    this.updateTime();
  }

  componentDidUpdate() {
    console.log("updated - Timer")
  }

  componentWillUnmount() {
      console.log("component unmount - Timer")
      clearInterval(this.interval)
  }
  updateTime = () => {
    
    this.interval = setInterval(() => {
        console.log("setInterval - Timer")
      this.setState({
        time: new Date()
      })
    }, 1000)
    console.log(this.interval, 'interval')
  }

  render() {
    console.log("render- Timer",this.props.username)
    return (
      <div>
        <h1>Hello World</h1>
        <h1>{ this.state.time.toString() }</h1>
        {/* <button onClick={this.updateTime}>Start timer</button> */}
      </div>
    )
  }
}

export default Timer;
