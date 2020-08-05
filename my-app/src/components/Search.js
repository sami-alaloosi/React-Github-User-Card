import React, {Component} from "react"

 export default class Search extends Component {
    onChange = (event) => {
        this.props.update(event.target.value)
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.submit()
    }
    render(){
        
        
        return(
            <form onSubmit={this.onSubmit}>
                <label>
                    <input
                    type="text"
                    placeholder="Enter Github Username"
                    value={this.props.value}
                    onChange={this.onChange}
                     />
                </label>
                <button className="green"> Search</button>
            </form>
        )
    }
}

