// 'rce' to create regular component structure.
import React, { Component } from 'react'

export class RegComp extends Component {
    render() {
        //console.log('Regular Component Render');
        return (
            <div>
                I'm the Regular component. {this.props.name}
                
            </div>
        )
    }
}

export default RegComp
