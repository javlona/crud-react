import React, {Component} from 'react';
import Table from './components/Table'
import Form from './components/Form'
import Modal from './components/Modal'
import { Routes, Route, Link } from "react-router-dom";

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

    selectUser = (id) => {
        const user = this.state.users.find(user => user.id === id)
        this.setState({selectedUser: user, isModalShown: true});
    }

    addHandler = (user) => {
        this.setState({
            users: [...this.state.users, user]
        })
    }

    closeModal = () => this.setState({isModalShown: false})
    
    updateUser = (user) => {
        const updatedUsers = this.state.users.map(item => item.id === user.id ? { ...item, ...user } : item)
        this.setState({users: updatedUsers})
    }

    render() {
        const { isLoading, users, selectedUser, isModalShown } = this.state
        if(isLoading) return <h1>Content loading...</h1>

        console.log(this.state)

        return (
            <div className="App">
                <h1>React CRUD operations</h1>
                <Form addHandler={ this.addHandler }/>
                <Table 
                    users={ users }
                    deleteHandler={ this.deleteHandler }
                    selectUser={ this.selectUser }
                />
                {isModalShown && <Modal 
                    user={ selectedUser } 
                    closeModal={ this.closeModal }
                    updateUser={ this.updateUser }
                    />
                }
            </div>
        )
    }


}

export default App;
