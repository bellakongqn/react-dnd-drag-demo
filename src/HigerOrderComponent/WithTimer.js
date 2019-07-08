import React from 'react';

// 高阶组件就是一个纯函数
export default function withTimer(PropsComponent){
    // PropsComponent 下一行可见 该函数返回一个组件
    return class extends React.Component{
        state= {
            time:new Date()
        };
        componentDidMount(){
            this.timerId = setInterval(()=>this.tick(),1000);
        }
        componentWillUnmount(){
            clearInterval(this.timerId);
        }
        tick(){
            this.setState({
                time:new Date()
            })
        }

        render(){
            // 该高阶组件render()函数内没有做任何操作
            // 只是给传入的组件增加了一个计时器属性
            //   {...this.props} 为传入组件接受外界传入的参数
            return <PropsComponent time={this.state.time} {...this.props} />
        }
    }
}