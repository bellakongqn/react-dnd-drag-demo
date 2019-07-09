import React, { Component } from 'react';
import Facc from './Facc'

class Index extends Component {
    render() {
        return (
            <div>
                <Facc>
                    {(name) => (
                        <div>{name}</div>
                    )}
                </Facc>
                
            </div>
        );
    }
}

export default Index;