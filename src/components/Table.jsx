import react, { Component} from "react";

class Table extends Component {
    render() {
        const { users, deleteHandler, selectUser } = this.props;

        return (
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
                                        <button onClick={() => deleteHandler(user.id)}>delete</button>
                                        <button onClick={() => selectUser(user.id)}>edit</button>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
            </table>
        )
    }
}

export default Table;