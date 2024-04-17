import React from 'react';

function Achievement(props) {
    return (
      <a href={props.link} className='achievement' target='_blank' rel='noreferrer'  style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        <h2>{props.title}</h2>
        <p className='grey-text'>{props.type} - {props.place}</p>
        <div className='pills'>
          {props.language.sort().map((element, index) => (
            <p key={index} className='pill'>{element}</p>
          ))}
        </div>
        {props.workInProgress === true ?
            <div className="work-in-progress-banner">Work in progress</div>
        : null
        }
      </a>
    );
}
Achievement.defaultProps = {
  title: 'Default Text of an Achievement',
  type: 'Please pick a type',
  place: 'Please pick a place',
  language: [],
  workInProgress: false,
  backgroundImage: "https://placehold.co/2000x100"
}
export default Achievement;