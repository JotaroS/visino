import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Navigation from './components/ui/Navigation';
class App extends Component{
  render(){
    return(
      <div>  {/* TODO: move contaier class here from Navigation.*/}
        {/* <Header /> */}
        <Navigation />
        <Counter />
        {/* <Footer /> */}
      </div>
    );
  }
}

class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      value:0
    };
  }

  onIncrement = ()=>{
    this.setState({value : Math.min(10, this.state.value + 1)});
  }

  onDecrement = ()=>{
    this.setState({value : Math.max(0, this.state.value - 1)});
  }

  render(){
    return(
      <div>
        <div>
          counts : {this.state.value}
        </div>
        <div>
        <button type="button" onClick={this.onIncrement}>+</button>
        <button type="button" onClick={this.onDecrement}>-</button>
        <Button onClick={this.onDecrement}>うんこ</Button>
        </div>

      </div>
    )
  }
}

export default App;