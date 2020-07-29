import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
    }
    update(type) {
        return e => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }
    renderErrors() {
        // debugger
        return(
            <ul>
                {this.props.errors.map((error,i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    render(){
        // debugger
        return <section id="signup-form">
            <h2>Sign up</h2>
            <div>
                Have an account? {this.props.login}
            </div>
            <form onSubmit={this.handleSubmit}>
                <label>Name
                        <input
                        type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                    />
                </label>
                <label>Email
                        <input
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                    />
                </label>

                <label>Password
                        <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                    />
                </label>
                <input type="submit" value="Create Account"/>
                {this.renderErrors()}
            </form>
        </section>
    }
    
}

export default SignUp;

//add removeErrors action to componentWillUnmount(){}