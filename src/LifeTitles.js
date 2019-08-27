import React, { Component } from 'react';

const LIFE = [
    'a software engineer',
    'a dog lover',
    'a avid hiker',
    'a rookie guitar player',
    'an enthusiastic life long learner',
    'an adventurous spirit'
];

class LifeTitles extends Component {
    state = { lifeIndex: 0  };

    componentDidMount() {
        console.log('Life title component has mounted');

        this.animateLifeTitles();
    }

    animateLifeTitles = () => {
        setInterval(() => {
            const lifeIndex = (this.state.lifeIndex + 1) % LIFE.length;

            this.setState({ lifeIndex });

        }, 4000);
    }

    render() {
        const life = LIFE[this.state.lifeIndex];

        return( 
            <p>I am {life}</p>
        )
    }
}
export default LifeTitles;