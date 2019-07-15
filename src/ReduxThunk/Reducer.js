import { combineReducers } from 'redux'
function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
  case "Select":
    return action.subreddit
   case 'RECEIVE_POSTS':
        return Object.assign({}, state, {
          items: action.posts,
          lastUpdated: action.receivedAt
        })
  default:
    return state
  }
}


function posts(
    state = {
      items: []
    },
    action
  ) {
    switch (action.type) {
      case 'REQUEST_POSTS':
        return Object.assign({}, state, {
        })
      case 'RECEIVE_POSTS':
        return Object.assign({}, state, {
          items: action.posts,
          lastUpdated: action.receivedAt
        })
      default:
        return state
    }
  }

const rootReducer = combineReducers({
    posts,
    selectedSubreddit
  })
  
  export default rootReducer