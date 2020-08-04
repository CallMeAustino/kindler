import React from 'react';

class Basics extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (this.props.masterState.currentStep === 2) {
            return (
                <>
                    <div>Hello</div>
                </>
            )
        }
        return null;
    }
}

export default Basics;