import React, { Component } from "react";

class Search extends Component {
    state = { 
        value:""
    }

    handleChange(event){
        this.setState({value:event.target.value});
        this.props.onSearch(event.target.value);
    }

    render() { 
        return (
            <div>
                <h6>Search</h6>
                <input className="form-control" type="text" onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
} 
 
export default Search;