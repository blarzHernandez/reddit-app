import React, { Component  } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { 
    selectSubreddit,
    fetchPostsIfNeeded,
    invalidateSubreddit
 } from "../actions";


 import Picker from "../Components/Picker";
 import Posts from "../Components/Posts";


 class AsyncApp extends Component {

     constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
     }


     componentDidMount(){
         const { dispatch, selectedSubreddit } = this.props;

         dispatch(fetchPostsIfNeeded(selectedSubreddit));
     }

     componentDidUpdate(prevProps){
         if(this.props.selectedSubreddit !== prevProps.selectedSubreddit){
             const { dispatch, selectedSubreddit } = this.props;
             dispatch(fetchPostsIfNeeded(selectedSubreddit));
         }
     }


     handleChange(nextSubreddit){
         this.props.dispatch(selectSubreddit(nextSubreddit));
     
     }

     onSearch(subreddit) {
         this.props.dispatch(fetchPostsIfNeeded(subreddit));
     }


     handleRefreshClick(e){
         e.preventDefault();
        const { dispatch, selectedSubreddit } = this.props;
        dispatch(invalidateSubreddit(selectedSubreddit));
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
     }



     render(){
         const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props;
         const isEmpty = posts.length === 0;

         return  (
             <div>
                 <Picker
                 value={selectedSubreddit}
                 onChange={this.handleChange}
                 options={['reactjs','frontend']}

                 />
                 <p>
                     {lastUpdated && 
                     <span>
                         Last updated at { new Date (lastUpdated).toLocaleTimeString() }.
                         { '  '}
                     </span>}
                     {
                         !isFetching && 
                         <button onClick={this.handleRefreshClick}> Refresh</button>
                     }
                    
                 </p>
                
                 {isEmpty
                 ? (isFetching ? <h2>Loading...</h2> : <h2>Empty</h2>)  
                 : <div style={{opacity:isFetching ? 0.5 : 1}}>
                     <Posts posts={posts}/>
                     </div>
                 }
             </div>
         )

     }




 }

 //set validations to all props

 AsyncApp.propTypes = {
     selectedSubreddit:PropTypes.string.isRequired,
     posts:PropTypes.array.isRequired,
     isFetching:PropTypes.bool.isRequired,
     lastUpdated:PropTypes.number,
     dispatch:PropTypes.func.isRequired
 }

 const  mapStateToProps = (state) => {
     const { selectedSubreddit, postsBySubreddit } = state
     const {
         isFetching,
         lastUpdated,
         items: posts
     } = postsBySubreddit[selectedSubreddit] || {
         isFetching:true,
         items:[]
     }


     return {
        selectedSubreddit,
         posts,
         isFetching,
         lastUpdated
     }
 }


 export default connect(mapStateToProps)(AsyncApp);