import React ,{Component} from 'react';
import tachyons from 'tachyons';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      count : 0
    }
  }

  increase = () => {
    this.setState({count: this.state.count + 1})
  }
  decrease = () => {
    this.setState({count: this.state.count - 1})
  }

  render(){
    return (
      <div className="parent" >
        <h1>{this.state.count}</h1>
        <div className="btn">
          <button onClick={this.increase} >Increase</button>
          <button onClick={this.decrease}>Decrease</button>
        </div>
      </div>
      );
  }
}

export default App;
