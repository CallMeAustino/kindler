import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
    }
    update(type) {
        return e => {
            this.setState({[type]: e.currentTarget.value})
        }
    }
    render() {
        return (
            <section className="session-form">
                <h2>Log in</h2>
                <form> 
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
                    <button onClick={this.handleSubmit}>Log In!</button>
                </form>
            </section>
        )
    }
}

export default Login;