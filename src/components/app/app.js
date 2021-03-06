import React, {Component} from 'react';
import PostList from '../post-list/post-list';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            posts: []
        };
        this.setNewState=this.setNewState.bind(this);
        this.getUsers=this.getUsers.bind(this);
    }
    componentDidMount(){
        this.getUsers();
    }
    getUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=>{this.setNewState(users)})
    }
    setNewState(data){
        this.setState({users: [data]});
    }
    render(){
        return(
            <PostList users={this.state.users} />
        )
    }
}

