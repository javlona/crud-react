import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            users: [],
            selectedUser: {},
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
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Username"/>
                    <input type="tel" placeholder="Phone"/>
                    <input type="text" placeholder="City"/>
                    <button type="submit">
                        Add
                    </button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => (
                                <tr key={ user.id }>
                                    <td>{ user.name.firstname } { user.name.lastname }</td>
                                    <td>{ user.email }</td>
                                    <td>{ user.username }</td>
                                    <td>{ user.phone }</td>
                                    <td>{ user.address.city }</td>
                                    <td>
                                        <button onClick={() => this.deleteHandler(user.id)}>delete</button>
                                        <button onClick={() => this.editHandler(user.id)}>edit</button>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }


}

export default App;
