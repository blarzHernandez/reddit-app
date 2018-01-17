import React,{ Component } from "react";
import PropTypes from "prop-types";
import {  Table } from "semantic-ui-react";


export default class Posts extends Component{


    render(){
        return(
            <Table celled>
                <Table.Row>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                </Table.Row>
                <Table.Body>
                {this.props.posts.map( (post,i) => <Table.Row key={i}><Table.Cell>{post.title}</Table.Cell></Table.Row>)}
                </Table.Body>
            </Table>
        )
    }
}



Posts.propTypes = {
    posts:PropTypes.array.isRequired
}