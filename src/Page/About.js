import React, { Component } from 'react';
import axios from 'axios'
class About extends Component {

    state={
        list:[]
    }
    componentDidMount(){
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
        .then(function (response) {
          _this.setState({
            list:response.data,
          });
        })
    }


    render() {
        return (
            <div>
                <h2>About</h2>
                {
                    this.state.list.map((item,id) =>(
                        <div key={id}>
                            { item.name + item.age + item.sex}
                        </div>
                    ))
                }
                
            </div>
        )
    }
    
}
export default About;