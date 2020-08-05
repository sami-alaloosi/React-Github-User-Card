import React, {Component} from 'react'



export default class User extends Component {
    
    render(){
        const {name, avatar_url, login, public_repos, followers, following, html_url} = this.props.user
        return (
            <div className="grid">
                <div>
                <img src={avatar_url} alt={`${login} avatar`}/>
                </div>

                <div>
                <h1>Name: {name}</h1>
                <div>Username: {login} </div>
                <div>Public Respos: {public_repos}</div>
                <div>Followers: {followers}</div>
                <div>Following: {following}</div>
                <a href={html_url} target="_blank">GitHub</a>
                </div>
                
               

            </div>
        )
    }
}