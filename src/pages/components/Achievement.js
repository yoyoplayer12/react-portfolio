import React from 'react';

function Achievement(props) {
  
    return (
      <a href={props.link} className='achievement'>
        <h2>{props.title}</h2>
      </a>
    );
}
Achievement.defaultProps = {
  title: 'Default Text of an Achievement',
}
export default Achievement;