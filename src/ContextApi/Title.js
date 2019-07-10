import React, { Component } from 'react';
import {ThemeContext} from './ContextApi'

class Title extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {context => (
                <h1 style={{background: context.background, color: context.color}}>
                    {this.props.children}
                </h1>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Title;