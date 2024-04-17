import React from 'react';

function Achievement(props) {
    return (
      <a href={props.link} className='achievement' target='_blank' rel='noreferrer'>
        <h2>{props.title}</h2>
        <p>{props.type} - {props.place}</p>
        <p className='pill'>{props.language}</p>
      </a>
    );
}
Achievement.defaultProps = {
  title: 'Default Text of an Achievement',
  type: 'Please pick a type',
  place: 'Please pick a place',
}
export default Achievement;