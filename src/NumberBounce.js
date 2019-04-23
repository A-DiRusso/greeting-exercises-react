import React from 'react';

class NumberBounce extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                number: 0
            }
    }
    componentDidMount() {
        setInterval(() => {
            let number = this.setState({ number: this.state.number + 1})
        }, 10000)
        
    }
    render() {
        return (
            <h2>
                {this.state.number}
            </h2>
        )
    }
}

export default NumberBounce;