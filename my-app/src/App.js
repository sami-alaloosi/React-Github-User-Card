import React, {Component} from 'react'
import axios from 'axios'

import './App.css'
import User from "./components/User"
import Followers from './components/Followers'
import Search from "./components/Search"


const userInitialValue = {}
const followersInitialValue = []
const searchInitialValue = ""

export default class App extends Component {
state ={
  user: userInitialValue,
  followers: followersInitialValue,
  search: searchInitialValue
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



update = (value) => {
  this.setState({
    search: value
  })
}

submit = () => {
  axios.get(`https://api.github.com/users/${this.state.search}`)
  .then(res=>{this.setState({
    user: res.data
  })})
  .catch(err=>{console.log("user axios get error", err)})

  axios.get(`https://api.github.com/users/${this.state.search}/followers`)
  .then(res=>{this.setState({
    followers: res.data
  })})
  .catch(err => {console.log("followers axios get error", err)})

  this.setState({
    search: searchInitialValue
  })
}

imgClick = (value) => {

  axios.get(`https://api.github.com/users/${value}`)
  .then(res=>{this.setState({
    user: res.data
  })})
  .catch(err=>{console.log("user axios get error", err)})

  axios.get(`https://api.github.com/users/${value}/followers`)
  .then(res=>{this.setState({
    followers: res.data
  })})
  .catch(err => {console.log("followers axios get error", err)})


}

  render(){
    
    return (
      <div className="App">
      <Search
       value={this.state.search}
       update={this.update}
       submit={this.submit}
        />
      <div className="center">
      <div className="flex container">
      <User user={this.state.user} />
      </div>
      </div>
        <div className="followeDiv">
        <div className="followers">

        {this.state.followers.map(follower => <div className="container"> <Followers
          key={follower.id}
          follower={follower}
          imgClick={this.imgClick}
         />
         </div>
         )}

       </div>
       </div>
      </div>
    )
  }  
}


