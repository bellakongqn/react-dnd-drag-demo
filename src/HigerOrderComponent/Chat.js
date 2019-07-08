import React, { Component } from 'react';
import withTimer from './WithTimer'

class Chat extends Component {
    render() {
        return (
            <div>
                <div>dhgcwkuy</div>
                {this.props.time.toLocaleString()}
            </div>
        );
    }
}

export default withTimer(Chat);