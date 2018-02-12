import React,{ Component } from "react";
import PropTypes from "prop-types";
import {  Grid, Card } from "semantic-ui-react";


export default class Posts extends Component{


    render(){
       
        return(
             
            <Grid.Row>             
              
                {this.props.posts.map( (post,i) => 
                    <Grid.Column key={i}>
                         <Card
                            image={post.preview ? post.preview.images[0].source.url : 'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg'}
                            header= {post.title}
                            description={post.description}
                         >
                             
                         </Card>
                    </Grid.Column>)}
                
            </Grid.Row>
            
        )
    }
}



Posts.propTypes = {
    posts:PropTypes.array.isRequired
}