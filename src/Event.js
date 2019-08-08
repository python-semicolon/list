import React, { Component } from 'react'

 class Event extends Component {
     constructor() {
         super()
     
         this.state = {
              message : 'hi'
         }
         // this.change = this.change.bind(this)
        }
        
      //  change(){
      //     this.setState({
      //     message : 'bye'
      //      })
      //  }

      change = () => {
          this.setState({
              message : 'bye'
          })
      }

      doublechange = () => {
          this.setState({
              message : 'hiii'
          })
      }

    render() {
        const{message} = this.state
        return (
            <div>
                <div>{message}</div>
                {/* <button className="cool" onClick={() => this.change()}>fancy</button> */}
                {/* <button onClick={this.change.bind(this)}>click me</button> */}
                <button onClick={this.change} 
                onDoubleClick={this.doublechange}
                > on click</button>
            </div>
        )
    }
}

export default Event    
