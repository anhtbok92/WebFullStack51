import React, { Component } from 'react';

class ClassComponent extends Component {
    render () {
        console.log('ClassComponent: ', this.props);
        return (
            <div>
                <h1>Welcome ! This is class component</h1>
                <h2>{this.props.name}</h2><br />
                <h2>{this.props.age}</h2>
            </div>
        )
    }
}

export default ClassComponent;