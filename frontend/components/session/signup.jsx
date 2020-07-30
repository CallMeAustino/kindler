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
    componentWillUnmount() {
        // debugger
        this.props.removeErrors();
    }
    render(){
        // debugger
        return (
            <section id="main-content">
                <section id="login-signup">
                    <section id="user-account-form">
                        <p style={{ fontSize: 32 }}>Sign up</p>
                        <div className="mb">
                            Have an account? {this.props.login}
                        </div>
                        <form className="flex center column" onSubmit={this.handleSubmit}>
                                    <input
                                    className="mb"
                                    placeholder="Name"
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                /> 
                                    <input
                                    className="mb"
                                    placeholder="Email"
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                                    <input
                                    placeholder="Password"
                                    className="mb"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            <input className="bttn bttn-green bttn-medium mb" type="submit" value="Create Account"/>
                            {this.renderErrors()}
                        </form>
                    </section>
                </section>
            </section>
        )}
    
}

export default SignUp;

//add removeErrors action to componentWillUnmount(){}