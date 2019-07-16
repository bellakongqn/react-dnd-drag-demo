import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchPosts} from './Actions'
 
class Index extends Component {
    constructor(props) {
        super(props)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
      }
    handleRefreshClick(e) {
        e.preventDefault()
    
        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPosts(selectedSubreddit))
      }

    render() {
        const {selectedSubreddit,posts } = this.props
        console.log(posts)
        return (
            <div>
                {selectedSubreddit}
                <a href='#'
                    onClick={this.handleRefreshClick}>
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


export default connect(mapStateToProps)(Index);