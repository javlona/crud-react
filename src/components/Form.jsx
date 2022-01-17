import react, { Component} from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: {
                firstname: "",
                lastname: "",
            },
            email: "",
            username: "",
            phone: "",
            address: {
                city: ""
            },
        }
    }

    changeHandler = (e) => { 
        const {value, name} = e.target
        this.setState({[name]: value})
    }

    nameHandler = (e) => {
        const {value, name} = e.target
        this.setState({name: {
            ...this.state.name, [name]: value
        }})
    }

    cityHandler = (e) => {
        const {value, name} = e.target
        this.setState({address: {city: value}})
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addHandler({...this.state, id: Date.now()})
        this.setState( {
            id: "",
            name: {
                firstname: "",
                lastname: "",
            },
            email: "",
            username: "",
            phone: "",
            address: {
                city: ""
            },
        })
    }
    
    render () {
        console.log(this.state)
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="firstname" value={this.state.name.firstname} placeholder="First Name" onChange={ this.nameHandler }/>
                    <input type="text" name="lastname" value={this.state.name.lastname} placeholder="Last Name" onChange={ this.nameHandler }/>
                    <input type="email" name="email" value={this.state.email} placeholder="Email" onChange={ this.changeHandler }/>
                    <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={ this.changeHandler }/>
                    <input type="tel" name="phone" value={this.state.phone} placeholder="Phone" onChange={ this.changeHandler }/>
                    <input type="text" name="city" value={this.state.address.city} placeholder="City" onChange={ this.cityHandler }/>
                    <button type="submit">
                        Add
                    </button>
                </form>
            </div>
        )
    }
}

export default Form;