import React from 'react';
import Achievement from './components/Achievement';
function Home(props) {
  
    return (
        <div>
            <div class='viewheight-centered-block'>
                <h1>{props.title}</h1>
            </div>
            <div class='section'>
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