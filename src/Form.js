import React, { Component } from "react"

class Form extends Component {
  constructor() {
    super()

    this.state = {
      username : '',
      comments : '',
      value : 'vue'
    };
  }

  changes = event => { 
    this.setState({
      username: event.target.value
    });
  };
  
  // com = comment 
  comchange = event => {      
    this.setState({
      comments: event.target.value
    })
  }

  valchange = event => {
    this.setState({
      value: event.target.value
    })
  }

  submit = event  => {
       alert(`${this.state.username} ${this.state.comments} ${this.state.value}`)
       event.preventDefault()
  }

  render() {
    return (
        <form onSubmit={this.submit}>
      <div>
        <label>username </label>
        <input
          type='text'
          value={this.state.username}
          onChange={this.changes}
        />
      </div>

      <br></br>
      <div>
        <label>comments</label>
        <textarea 
        type='text'
        value={this.state.comments}
        onChange={this.comchange}
        />
      </div>

      <div>
        <br></br>
        <label>topic</label>
        <select value={this.state.value}
              onChange={this.valchange}>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="vue">vue</option>
        </select>
      </div>
      <br></br>
      <button type="submit">submit</button>
      </form>
    );
  }
}

export default Form