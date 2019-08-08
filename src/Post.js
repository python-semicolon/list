import React, { Component } from 'react'
import axios from 'axios'   

class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId: '',
             title: '',
             body: '',
             password: ''
        }
    }

    changehandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    
    submithandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts' , this.state)
        .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
    }

    render() {
        const {userId , title, body , password} = this.state 
        return (
            <div>
            <form onSubmit={this.submithandler}>
            <div>
            <input type="text" name="userId" value={userId} onChange={this.changehandler} />
            </div>
            <div>
            <input type="text" name="title" value={title} onChange={this.changehandler}/>
            </div>
            <div>
            <input type="text" name="body" value={body} onChange={this.changehandler}/>
            </div>
            <div>
            <input type="password" name="password" value={password} onChange={this.changehandler}/>
            </div>
            <button type="submit">click me</button>
            </form>     
            </div>
        )
    }
}

export default Post
