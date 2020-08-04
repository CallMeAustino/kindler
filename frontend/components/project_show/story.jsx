import React from 'react';

class Story extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (this.props.masterState.currentStep === 1 ) {
        return(
            <>
                <div>Hello</div>
            </>
        )
        } 
        return null;
    }
}

export default Story;