import React, { Component } from 'react'

class Slider extends Component {
    state = { 
        value:"100000"
    }

    range(event){
        this.setState({value:event.target.value});
        this.props.onSlide(event.target.value);
    }

    render() { 
        return (
            <div>
                <h6>range price</h6>
                <input className="form-control" min="1000" max="100000" type="range" value={this.state.value} onChange={this.range.bind(this)}/><br></br>
                <h5>curr Value:{this.state.value}</h5>
            </div>
        );
    }
}
 
export default Slider;