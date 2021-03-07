import React, {Component} from 'react';
import PostList from '../post-list/post-list';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            posts: []
        };
        this.setNewState=this.setNewStateUsers.bind(this);
        this.getUsers=this.getUsers.bind(this);
    }
    componentDidMount(){
        this.getUsers();
        this.getPosts();
    }
    getUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=>this.setState({users}))
    }
    setNewStateUsers(data){
        this.setState({users: data});
    }
    getPosts(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=>response.json())
            .then(posts=>this.setState({posts}))
    }
    render(){
        return(
            <PostList 
                users={this.state.users} 
                posts={this.state.posts}    
            />
        )
    }
}

