import fetch from 'cross-fetch'
// https://www.reddit.com/r/${subreddit}.json

export function fetchPosts(subreddit) {
    return dispatch => {
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
          .then(response => response.json())
          .then(json => dispatch(receivePosts(subreddit, json)))
      }
  }

  function receivePosts(subreddit, json) {
    return {
      type: 'RECEIVE_POSTS',
      subreddit,
      posts: json.data.children,
      receivedAt: Date.now()
    }
  }