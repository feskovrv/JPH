import React, {Component} from 'react';
import PostListItem from '../post-list-item/post-list-item';

export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        const {users} = this.props;
        const userItems = users.map((user)=>{
            const {id, name, phone, username, email, website} = user;
            return (
                <li key={id}>
                    <PostListItem 
                        key={id}
                        name={name}
                        phone={phone}
                        username={username}
                        email={email}
                        website={website}
                    />
                </li>
            )
        })
        console.log(userItems);
        console.log(users);
        return(
            <>
                {userItems}
            </>
        )
    }
}