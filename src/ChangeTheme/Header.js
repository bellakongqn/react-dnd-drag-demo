import React, { Component } from 'react';
import ThemedButton from './ThemedButton';
import ShowTheme from './ShowTheme'
class Header extends Component {
    render() {
        return (
            <div>
                 <ThemedButton/>
                 <ShowTheme/>
            </div>
        );
    }
}

export default Header;