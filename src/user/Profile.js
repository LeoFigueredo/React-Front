import React, { Component } from 'react';
import { isAuthenticated } from "../auth";

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            user: "",
            redirectToSignin: false
        }
    }
    componentDidMount(){
        console.log("User id from route params: " , this.props.match.params.userId)
    }
    render() {
        return (
         <div className="container">
             <h2 className="mt-5 mb-5">Profile</h2>
             <p>Hi, {isAuthenticated().user.name} 🤲</p>
         </div>   
        );
    }
}

export default Profile;