import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Just WoW"
        };
    }
    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name:'Just WoW'
            });
        },3000);

        }
    
    render() {
       // console.log('Parent Component Render');
        return (
            <div>
                I'm the Parent Component
                <PureComp name={this.state.name}/>
                <RegComp name={this.state.name}/>
            </div>
        )
    }

}
export default ParentComp
