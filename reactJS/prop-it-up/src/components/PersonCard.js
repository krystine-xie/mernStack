import React from 'react';

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.incrementAge = this.incrementAge.bind(this);
        this.state = {
            age: this.props.age
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>

                <button onClick={ (e) => this.incrementAge(e) } >Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }

    incrementAge() {
        this.setState(prevState => {
            return {
                ...prevState,
                age: prevState.age + 1 
            }
        })
    }
}

export default PersonCard;