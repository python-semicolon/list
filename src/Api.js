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
      </div> 
    ); 
  }
}

export default Api;