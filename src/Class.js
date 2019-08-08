import React, { Component } from "react"

class Cool extends Component {
  clickhandle() {
    console.log('coole')
  }
  constructor(){
    super()
    this.state = {
      message : 0
    }
  }
  
  change(){
    this.setState({
       message : this.state.message + 1
  })
  }

  reverce(){
    this.setState({
      message : this.state.message - 1
    })
  }

  componentDidMount(){
    console.log('componentDidMount')   
    console.log('-----------------')
  }  

    render() {
      const{name} = this.props
      const{message} = this.state
     return (
       <div>
        <h1>nice to meet u {name}</h1>
        {message}
        <br></br>
        <button onClick= {() => this.change()}> click me </button>
        <button onClick= {() => this.reverce()}> reverce </button>
        <hr></hr>
        <button onClick={this.clickhandle}>true</button>
       </div>
     )
    }
      componentDidUpdate(prevProps, prevState, snapShot) {
       console.log('updated')
     }
}

export default Cool

  