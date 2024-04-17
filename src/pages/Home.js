import React from 'react';
import Achievement from './components/Achievement';
function Home(props) {
  
    return (
        <div>
            <div className='viewheight-centered-block'>
                <a href="#section-1" className='fp-title'>{props.title}</a>
            </div>
            <div className='section' id='section-1'>
                
            </div>
            <div className='section' id='section-code'>
                <Achievement title="Beach Puppies (game) | JavaScript - XD year 1" link="https://yorickdv.be/projects/1IMD/BeachPuppies/game.html" />
                <Achievement title="Cub Defender (game) | JavaScript - XD year 1" link="https://yorickdv.be/projects/1IMD/clubdefender/portrait.html" />
                <Achievement title="Copoll | php - XD year 2" link="https://github.com/yoyoplayer12/desity" />
            </div>
        </div>
    );
}
Home.defaultProps = {
  title: 'Default Title'
}
export default Home;