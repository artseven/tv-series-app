import React from 'react';

// const Intro = props =>... same syntax
const Intro = (props) => (
    <p className="App-intro">
      {props.message}
    </p>
);

export default Intro;