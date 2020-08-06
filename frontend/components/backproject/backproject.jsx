import React from 'react';
import { connect } from 'react-redux'
import  { openModal, closeModal } from '../../actions/project'
import { addBacker } from '../../actions/project'

class BackProject extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            amount: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.update = this.update.bind(this);
    }
    handleChange(e, attribute) {
        this.setState({ [attribute]: e.target.value })
    }

    update(e){
    debugger
        e.preventDefault();
        const obj = {
            project_id: parseInt(window.currentProj),
            backer_id: window.store.getState().session.currentUser.id,
            amount: parseInt(this.state.amount)
        }
        
        this.props.addBacker(obj)
    }
    render() {
        
        return (
            <div className="back-project-container">
                <form onSubmit={(e) => this.update(e)} className="backing-form-box">
                    Thanks for backing!
                    <br/>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <div className="backing-form">
                        <label>Backing Amount:
                            <input type="text"
                                value={this.state.amount}
                                onChange={(e) => this.handleChange(e,'amount')}
                                className="backing-input"
                            />
                        </label>
                    </div>
                    <input className="backing-submit" type="submit" value="Confirm"/>
                </form>
            </div>
        )
    }
}

const msp = state => {
    return {
    }
}

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        addBacker: (backing) => dispatch(addBacker(backing))

    }
}

export default connect(msp, mdp)(BackProject);
