import React, {Component} from 'react'
import axios from 'axios'

import './App.css'
import User from "./components/User"
import Followers from './components/Followers'


const userInitialValue = {}
const followersInitialValue = []

export default class App extends Component {
state ={
  user: userInitialValue,
  followers: followersInitialValue
}
componentDidMount(){
  axios.get('https://api.github.com/users/sami-alaloosi')
  .then(res=>{this.setState({
    user: res.data
  })})
  .catch(err=>{console.log("user axios get error", err)})


  axios.get('https://api.github.com/users/sami-alaloosi/followers')
  .then(res=>{this.setState({
    followers: res.data
  })})
  .catch(err => {console.log("followers axios get error", err)})
}


  render(){
    
    return (
      <div className="App">
        <User user={this.state.user} />
        {this.state.followers.map(follower => <Followers
          key={follower.id}
          follower={follower}
         />)}
        
      </div>
    )
  }  
}


