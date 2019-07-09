import React, { Component } from 'react';
import PropTypes from 'prop-types';

//  "函数作为子组件"是一个组件
class Facc extends Component {
    render() {
        return (
            <div>
                {this.props.children('Scuba Steve')}
            </div>
        );
    }
}

Facc.propTypes = {
    children: PropTypes.func.isRequired,
  };

export default Facc;

