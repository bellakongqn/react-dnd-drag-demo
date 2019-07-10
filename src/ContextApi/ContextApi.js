import React, { Component } from 'react';
import Header from './Header'

export const ThemeContext = React.createContext({
    background: 'red',
    color: 'white'
});

class ContextApi extends Component {
    render() {
        return (
            <ThemeContext.Provider value={{background: 'green', color: 'white'}}>
                <Header />
            </ThemeContext.Provider>
        );
    }
}

export default ContextApi;