// 'rce' is the cheat code for load everything.
// 'rconst' is the cheat code to write contructor and state automatically.
import React, { Component } from 'react';
import UpdatedComp from './HigherOrder';

export class Click extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0
             
        };
    }
    UpdateClick=()=>{
        this.setState({count:this.state.count+1});
    }
    
    render() {
        const {count}=this.state;
        return (
            <div>
                <button onClick={this.UpdateClick}> {this.props.name} Clicked {count} Time</button>
                
            </div>
        )
    }
}

export default UpdatedComp(Click);


