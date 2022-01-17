import React, {Component} from 'react';
import Table from './components/Table'
import Form from './components/Form'
import Modal from './components/Modal'

import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            users: [],
            selectedUser: {},
            isModalShown: false,
        }
    }
    
    componentDidMount() {
        fetch('https://fakestoreapi.com/users')
            .then(response => response.json())
            .then(users => this.setState({
                users: users
            }))
    }

    deleteHandler = (id) => {
        const users = this.state.users.filter(user => user.id !== id)
        this.setState({users: users})
    }

    editHandler = (id) => {
        const user = this.state.users.find(user => user.id === id)
        this.setState({selectedUser: user});
    }

    render() {
        const { isLoading, users } = this.state
        if(isLoading) return <h1>Content loading...</h1>

        console.log(this.state)

        return (
            <div className="App">
                <h1>React CRUD operations</h1>
                <Form />
                <Table 
                    users={ users }
                    deleteHandler={ this.deleteHandler }
                    editHandler={ this.editHandler }
                />
            </div>
        )
    }


}

export default App;
