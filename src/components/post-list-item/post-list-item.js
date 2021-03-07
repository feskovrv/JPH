import React, {Component} from 'react';

export default class PostListItem extends Component {
    render(){
        const {title, body, user} = this.props;
        return (
            <>
                <div>{user}</div>
                <div>{title}</div>
                <div>{body}</div>
            </>
        )
    }
}