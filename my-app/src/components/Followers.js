import React, {Component} from "react"

export default class Followers extends Component{

    render(){
        console.log(this.props.follower)
        const {login, avatar_url, html_url} = this.props.follower
        return(
            <div>
            <img src={avatar_url} alt={`${login} avatar`} />
            <div>Username: {login}</div>
            <a href={html_url}>GitHub</a>
            </div>
        )
    }


}
