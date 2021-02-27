import React, {Component} from 'react';
import './Form.styles.css';

class Form extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            savedUsername:''
        }

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            username:'',
            password:'',
            savedUsername: this.state.username 
        })

    }
    render(){
        return (
            <div>
                <h1>welcome {this.state.savedUsername}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>username:</label>
                    <input type='text' name='username' onChange={this.handleChange}></input>
                    
                    <label htmlFor='password'>password:</label>
                    <input
                        type='password'
                        name='password'
                        onChange={this.handleChange}
                    />
                    <button type='submit'>submit</button>
                </form>
            </div>
        )
    }
}

export default Form 