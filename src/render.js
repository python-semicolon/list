import React, { Component } from 'react'

class Render extends Component {
    constructor() {
        super()
    
        this.state = {
            islogedin : true
        }
    }
    
        render() {

            return this.state.islogedin && <div> good day </div>

            // return(
            //     this.state.islogedin ?
            //     <div>yo what's up</div> :
            //     <div>who the f r u</div>
            //     )

        // if else

        //  if(this.state.islogedin) {
        //      return <div> welcome gest  </div>
        //      }
        //  else {
        //     return <div>welcome user</div>
        //      }
    }
}   

export default Render