import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchPosts} from './Actions'
 
class Index extends Component {
    render() {   
        const {selectedSubreddit,posts,fetchPosts } = this.props
        console.log(posts)
        return (
            <div>
                {selectedSubreddit}
                <a href='#'
                    onClick={()=>fetchPosts(selectedSubreddit)}>
                    Refresh
                    </a>
                <ul>
                    {posts.items.map(item => (
                        <li key={item.id}>{item.data.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        selectedSubreddit: state.selectedSubreddit,
        posts:state.posts
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchPosts,
        // ....其它action
    },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Index);