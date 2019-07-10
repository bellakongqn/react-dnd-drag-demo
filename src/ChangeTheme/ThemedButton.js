import React, { Component } from 'react';
import {ThemeContext} from './ChangeTheme'

class ThemedButton extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
              {({theme, changeTheme}) => <button onClick={changeTheme} style={{background: theme.background, color: theme.color}}> It's a button. </button>}
           </ThemeContext.Consumer>
        );
    }
}

export default ThemedButton;