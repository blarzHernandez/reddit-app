import React,{ Component } from "react";
import PropTypes from "prop-types";
import {  Grid, Card, Icon, Image, Button} from "semantic-ui-react";


export default class Posts extends Component{

    //truncate function
 truncateText(text, limit){
     const shorted = text.indexOf(' ', limit);
     if(shorted === -1) return text;
     return text.substring(0, shorted) + '...';

 }
    render(){
       
        return(
             
            <Grid.Row>             
              
                {this.props.posts.map( (post,i) => 
                    <Grid.Column key={i}>
                         <Card fluid>
                            <Card.Content>
                          <a href = {post.url} target='_blank'>
                           <Image src= {post.preview ? post.preview.images[0].source.url : 'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg'}/>

                           </a>
                                <Card.Header>{post.title}</Card.Header>
                                <Card.Meta></Card.Meta>
                                <Card.Description>{this.truncateText(post.selftext,50)}</Card.Description>                                
                            </Card.Content>
                            <Card.Content extra>                             
                                <a href={post.url} target='_blank'>
                                    <Button circular color='facebook' content='Read More..'/>                                  
                                </a>
                            </Card.Content>                             
                         </Card>
                    </Grid.Column>)}
                
            </Grid.Row>
            
        )
    }
}



Posts.propTypes = {
    posts:PropTypes.array.isRequired
}