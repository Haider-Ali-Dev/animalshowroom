import React from 'react';
import './App.css';
import Image from './Image/Image';
import Header from './Header/Header';;

class App extends React.Component{
  render() {
    return (
      <div>
        <Header/>
        <Image/>
      </div>
    )
  }
}

export default App;
