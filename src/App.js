import React, {Component} from 'react';
import Navigation from './components/ui/Navigation';
import Main from './components/visualization/Main';

class App extends Component{
  render(){
    return(
      <div className="container-fluid">
      <div className="row">
        {/* <Header /> */}
        <Navigation />
        <Main />
        {/* <Footer /> */}
      </div>
      </div>
    );
  }
}

export default App;