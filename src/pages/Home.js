import React from 'react';
import Achievement from './components/Achievement';
function Home(props) {
  
    return (
        <div>
            <div className='viewheight-centered-block'>
                <a href="#section-1" className='fp-title'>{props.title}</a>
            </div>
            <div className='section' id='section-1'>
                <Achievement title="First Achievement" link="https://www.google.com" />
                <Achievement title="Second Achievement" link="https://www.google.com" />
                <Achievement title="Third Achievement" link="https://www.google.com" />
            </div>
        </div>
    );
}
Home.defaultProps = {
  title: 'Default Title'
}
export default Home;