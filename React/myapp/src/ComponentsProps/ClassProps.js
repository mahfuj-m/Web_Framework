import React, { Component } from 'react'

export class ClassProps extends Component {
    render() {
        return (
            <div>
                <h1>hello {this.props.name}!!! from {this.props.place} </h1>
                <h3>{this.props.children}</h3>
            </div>
        )
    }
}

export default ClassProps
