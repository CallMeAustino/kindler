import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);

    }
    handleSubmit(e) {
        e.preventDefault();
        // debugger
        this.props.login(this.state)
    }
    demoLogin(e) {
        e.preventDefault();
        this.props.login({ email: "lauren", password: "lauren" })
    }
    update(type) {
        return e => {
            this.setState({[type]: e.currentTarget.value})
        }
    }
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    componentWillUnmount(){
        // debugger
        this.props.removeErrors();
    }
    render() {
        return (
            <section id="main-content">
                <section id="login-signup">
                    <section id="user-account-form">
                        <section className="rounded-content-frame">
                        <p style={{fontSize: 32}}>Log in</p>
                            <form className="flex center column"> 
                                    <input
                                        className="mb"
                                        placeholder="Email"
                                        type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                    />
                                    <input
                                        className="mb"
                                        placeholder="Password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                    />
                                <button className="bttn bttn-green bttn-medium mb" onClick={this.handleSubmit}>Log In</button>
                                <button className="bttn bttn-green bttn-medium" onClick={this.demoLogin}>Demo Login</button>

                                {this.renderErrors()}
                            </form>
                            <div>
                                New to Kickstarter? {this.props.signup}
                            </div>
                        </section>
                    </section>
                </section>
            </section>
        )
    }
}

export default Login;