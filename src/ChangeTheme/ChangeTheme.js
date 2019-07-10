import React, { Component } from 'react';
import Header from './Header'

export const ThemeContext = React.createContext({
    color: '#f83',
    background: '#EEE'
});
 const themes = [
    {
        color: '#f00',
        background: '#efa'
    },
    {
        color: '#06fae5',
        background: '#aae'
    },
    {
        color: '#ef5',
        background: '#cef'
    },
    {
        color: '#fff',
        background: '#000'
    }
];

class ChangeTheme extends Component {
    state = {
        themeIndex: 0
    };
    changeTheme = () => {
        const {themeIndex} = this.state;
        const newIndex = themeIndex < themes.length - 1 ? (themeIndex + 1) : 0;
        this.setState({
            themeIndex: newIndex
        });
    };
    render() {
        const {themeIndex} = this.state;
        return (
            <div className="test-test">
                <ThemeContext.Provider value={{
                    theme: themes[themeIndex],
                    changeTheme: this.changeTheme
                }}>
                    <Header />
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default ChangeTheme;