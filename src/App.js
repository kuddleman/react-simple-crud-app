import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      title: 'React Simple Crud App',
      act: 0,
      index: '',
      datas: []
    }
  }

  componentDidMount() {
    this.refs.name.focus();
  }

  fSubmit = e => {
    e.preventDefault()
    console.log('try')

    let datas = this.state.datas;
    let name = this.refs.name.value 
    let address = this.refs.address.value 

    let data = {
      name, address
    }

    datas.push(data)

    this.setState({
      datas: datas
    })

    this.refs.myForm.reset() 
    this.refs.name.focus()  
  }

  render() {
    return (
      <div className="App">
        <h2>{ this.state.title }</h2>
        <form ref="myform" className="myForm">
          <input type="text" ref="name" placeholder="your name" className="formField"/>
          <input type="text" ref="adress" placeholder="your address" className="formField"/>
          <button onClick={ this.fSubmit } className="myButton">submit</button>

        </form>
      </div>
    );

  }
}

export default App;
