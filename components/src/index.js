import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail.js'

const App = () => {
    return (

    <div className="ui container comments">
        <CommentDetail author="Sam" time="today" content="poh-tah-toes" avatar={faker.image.animals()}/>
        <CommentDetail author="Frodo" time="yesterday" content="I am the ring bearer" avatar={faker.image.cats()}/>
        <CommentDetail author="Pippin" time="now" content="i like dogs" avatar={faker.image.food()}/>
        <CommentDetail author="Merry" time="3:00pm" content="i like lamp" avatar={faker.image.sports()}/>
    </div>
    );
};


ReactDOM.render(
<App />,
document.querySelector('#root')


);