import React, {Component} from 'react';
import PostListItem from '../post-list-item/post-list-item';

export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        const {users, posts} = this.props;
        const postItems = posts.map((post)=>{
            const {id, userId, body, title} = post;
            const userName = users.filter((user)=>user.id===userId)[0].name;
            return (
                <li key={id}>
                    <PostListItem 
                        title={title}
                        body={body}
                        user={userName}
                    />
                </li>
            )
        })
        return(
            <>
            <ul>
                {postItems}
            </ul>
            </>
        )
    }
}