import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js'

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err)=> console.log(err)

    );



return (
    <div>hi</div>
)
};



ReactDOM.render(
    <App />,
    document.querySelector('#root')
);