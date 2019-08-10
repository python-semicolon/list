import React, { Component } from "react";
import axios from "axios";

class Api extends Component {
  constructor() {
    super()
    this.state = {
      postses: [],
      error: ''
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts" ,) 
      .then(response => {
        console.log(response);
        this.setState({ postses: response.data })
      })
      .catch(error => {
        console.log(error);
        this.setState({errorMsg: 'Error retrieving data'})
      });
  }
  render() { 
    const { postses, errorMsg } = this.state
    return (    
      <div>
        <h4>lists</h4>
        {postses.length 
					? postses.map(post => <div className="frist" key={post.id}>{post.userId}:{post.title}</div>)
          : null} 
        {errorMsg ? <div>{errorMsg}</div> : null}
        <div class="gist-meta">
        <a href="https://gist.githubusercontent.com/pythonsemicolen/3e4da56c8e2eeb008757be8bae822bb7/raw/9905d282ac95f60de5e86189d33068627f374272/test.js">one</a>
        <a href="https://gist.github.com/3e4da56c8e2eeb008757be8bae822bb7.git">cool</a>
      </div>
      </div> 
    );  
  }
}

export default Api;