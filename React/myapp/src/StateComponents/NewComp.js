import React, { Component } from 'react'
import bell1 from './bell1.png';
import bell2 from './bell2.png';

export class NewComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Subscribe Bro !!!',
             sub:"Subscribe",
             imgURl:bell1
        };
    }
    styles={
        fontStyle:"italic",
        color: 'purple'
    };
    ButtonChange=()=>{
        this.setState({
            message:"Hit the Bell Icon",
            imgURl:bell2,
            sub:"Subscribed"
        });
    };
    imageChange=()=>{
        this.setState({
            imgURl:bell2,
            message:"thank You"
        });
    };
    
    render() {
        return (
            <div>
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.ButtonChange}>{this.state.sub}</button>
                <p/>
                <img  style={{width:"30px", height:"30px"}} src={this.state.imgURl} alt=""
                onClick={this.imageChange} />
                
            </div>
        )
    }
}

export default NewComp
