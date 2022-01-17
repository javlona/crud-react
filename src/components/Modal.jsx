import react, { Component } from "react";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
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
    }

    componentDidMount() {
        this.setState({user: {...this.state.user, ...this.props.user}})
    }

    changeHandler = (e) => { 
        const { user } = this.state
        const {value, name} = e.target
        this.setState({user: {...user, [name]: value}})
    }

    nameHandler = (e) => {
        const { user } = this.state
        const {value, name} = e.target
        this.setState({user: {
            ...user,
            name: {
            ...this.state.user.name, [name]: value
        }}})
    }

    cityHandler = (e) => {
        const { user } = this.state
        const {value, name} = e.target
        this.setState({user: {
            ...user, 
            address: {city: value}
        }})
    }

    updateHandler = (e) => {
        e.preventDefault()
        this.props.updateUser(this.state.user)
        this.setState({user: {
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
        })
        this.props.closeModal()
    }

  render() {
    const { name, email, username, phone, address} = this.state.user
    const {firstname, lastname} = name
    const { city } = address
    const { closeModal } = this.props

    console.log(this.state)

    return (
      <form className="modal" onSubmit={this.updateHandler}>
        <input
          onChange={ this.nameHandler }
          name="firstname"
          type="text"
          placeholder="First Name"
          defaultValue={ firstname }
        />
        <input
          onChange={this.nameHandler}
          name="lastname"
          type="text"
          placeholder="Last name"
          defaultValue={ lastname }
        />
         <input
          onChange={this.changeHandler}
          name="username"
          type="text"
          placeholder="Enter username"
          defaultValue={ username }
        />
        <input
          onChange={this.changeHandler}
          name="email"
          type="email"
          placeholder="Enter email"
          defaultValue={ email }
        />
        <input
        onChange={this.changeHandler}
        name="phone"
        type="tel"
        placeholder="Enter phone number"
        defaultValue={ phone }
        />
        <input
          onChange={this.cityHandler}
          name="city"
          type="text"
          placeholder="Enter address"
          defaultValue={ city }
        />

        <button type="sumbit" >
          Update
        </button>
        <button type="button" onClick={closeModal}>
          Close
        </button>
      </form>
    );
  }
}

export default Modal;
