import react, { Component} from 'react';

class Form extends Component {
    
    
    render () {
        return(
            <div>
                <form>
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="text" name="username" placeholder="Username"/>
                    <input type="tel" name="phone" placeholder="Phone"/>
                    <input type="text" name="city" placeholder="City"/>
                    <button type="submit">
                        Add
                    </button>
                </form>
            </div>
        )
    }
}

export default Form;