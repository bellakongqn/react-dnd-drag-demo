import React, { Component } from 'react';
import {ThemeContext} from './ChangeTheme'

class ShowTheme extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {({theme}) => <div>
                    <span>color是：{theme.color}</span>
                    <br/>
                    <span>background是：{theme.background}</span>
                </div>}
            </ThemeContext.Consumer>
        );
    }
}

export default ShowTheme;