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
                <Achievement title="Beach Puppies (game) | JavaScript - XD year 1" link="https://yorickdv.be/projects/1IMD/BeachPuppies/game.html" type="game" place="1 XD" language="JavaScript" />
                <Achievement title="Cub Defender (game) | JavaScript - XD year 1" link="https://yorickdv.be/projects/1IMD/clubdefender/portrait.html" type="game" place="1 XD" language="JavaScript" />
                <Achievement title="Copoll | php - XD year 2" link="https://github.com/yoyoplayer12/desity" type="Community platform" place="2 XD" language="php" />
            </div>
        </div>
    );
}
Home.defaultProps = {
  title: 'Default Title'
}
export default Home;