

//user can select a subreddit to display
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';


//action creator function
export function selectSubreddit (subreddit) {
    //return an action as an object
    return {
        type:SELECT_SUBREDDIT,
        subreddit //ECMA6 subreddit  is equal this subreddit:subreddit
    }
}


//user can press a refresh button to update it
export const INVALIDATE_SUDREDDIT = 'INVALIDATE_SUDREDDIT';


//action creator function
export function invalidateSubreddit (subreddit){

    //return the action as an object
    return{
        type:INVALIDATE_SUDREDDIT,
        subreddit
    }
}


//this action is governing by the network requests

//when it's time to fetch the post from some subreddit , We will dispatch it
export const REQUEST_POSTS = 'REQUEST_POSTS';


//Action creator 
function requestPosts(subreddit){
    return {
        type:REQUEST_POSTS,
        subreddit
    }
}

//when the network request comes through, we will dispatch
export const RECEIVE_POSTS = 'RECEIVE_POSTS';


//action creator function
export const receivePosts = (subreddit, json) =>({
  
        type:RECEIVE_POSTS,//type 
        subreddit,//subreddit
        posts:json.data.children.map(child => child.data),//JSON data
        receivedAt:Date.now()//datetime received
    }
)


//meet out first thing action creator Asyncronous actions creators
function fetchPosts(subreddit){
    return function(dispatch){
        dispatch(requestPosts(subreddit));
         return fetch(`https://www.reddit.com/r/${subreddit}.json`)
         .then( response =>  response.json())
         .then(
             json => {
             console.log(json);
             dispatch(receivePosts(subreddit,json))})
    }
}


function shouldFetchPosts(state, subreddit){
    const posts = state.postsBySubreddit[subreddit];
    if(!posts){
        return true;
    }else if(posts.isFetching){
        return false;
    }else{
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeeded(subreddit){
    return (dispatch, getState) => {
        if(shouldFetchPosts(getState(), subreddit)){
            return dispatch(fetchPosts(subreddit));
        }
    }
}