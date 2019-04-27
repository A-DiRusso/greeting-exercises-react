import React from 'react';
import CountBy from './CountBy'


class CounterButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: []
        };
    }

    _handleTestClick = () => {
        const { buttons } = this.state;
        this.setState({
            buttons: buttons.concat(<CountBy />)
        });
    };
    render() {
        return (
            <div>
                <button onClick={this._handleTestClick}>Add Counter</button>
                <div>{[...this.state.buttons]}</div>
            </div>
        );
    }
 


}

export default CounterButton;