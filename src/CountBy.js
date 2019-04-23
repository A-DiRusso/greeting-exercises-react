import React from 'react';

class CountBy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            countBy:15
        }
    }
    componentDidMount() {
        let direction = 1;
        setInterval(() => {
            if (direction === 1) {
                this._incrementNumber()
            } if (this.state.number >= 95){
                direction = 0;
            }
            if (direction === 0) {
                this._decrementNumber()
            } if (this.state.number <= -85) {
                direction = 1;
            }
           
        }, 1000)
        
    }

    render() {
        return (
            <h2>
                {this.state.number}
            </h2>
        )
    }

    _incrementNumber = () => {
        this.setState({
            number: this.state.number + this.state.countBy
        });
    }
    _decrementNumber = () => {
        this.setState({
            number: this.state.number - this.state.countBy
        });
    }
}

export default CountBy;