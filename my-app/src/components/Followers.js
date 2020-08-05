import React, {Component} from "react"

export default class Followers extends Component{

    render(){
        
        const {login, avatar_url, html_url} = this.props.follower
        return(
            <div className="grid2">

            <div onClick={()=>{this.props.imgClick(login)}}>
            <img src={avatar_url} alt={`${login} avatar`} />
            </div>

            <div>
            <h3>Username: {login}</h3>
            <a href={html_url} target="_blank">GitHub</a>
            </div>
            
            
            </div>
        )
    }


}
