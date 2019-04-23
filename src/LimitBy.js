import React from 'react';


class LimitBy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            countBy: 13,
            upperLimit: 98,
            lowerLimit: -98
        }
    }
    componentDidMount() {
        let direction = 1;
        setInterval(() => {
            if (direction === 1) {
                this._incrementNumber()
            } if (this.state.number > this.state.upperLimit){
                direction = 0;
            }
            if (direction === 0) {
                this._decrementNumber() 
            } if (this.state.number < this.state.lowerLimit) {
                direction = 1;
            }
        }, 1000)
    }

    render() {
        return(
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

export default LimitBy