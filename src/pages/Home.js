import React from 'react';
import Achievement from './components/Achievement';
function Home(props) {
  
    return (
        <div>
            <div className='section section-no-pad'>
                <a href="#section-1" className='fp-title'>{props.title}</a>
            </div>
            <div className='section section-no-pad' id='section-1'>
                <a href="#section-code" className='mini-link-title'>I Code</a>
                <a href="#section-dj" className='mini-link-title'>I DJ</a>
                <a href="#section-design" className='mini-link-title'>I Design</a>
            </div>
            <div className='section section-blocks' id='section-code'>
                <Achievement title="Beach Puppies" link="https://yorickdv.be/projects/1IMD/BeachPuppies/game.html" type="Game" place="1 XD" language="JavaScript" />
                <Achievement title="Cub Defender" link="https://yorickdv.be/projects/1IMD/clubdefender/portrait.html" type="Game" place="1 XD" language="JavaScript" />
                <Achievement title="Copoll" link="https://github.com/yoyoplayer12/desity" type="Community platform" place="2 XD" language="php" />
            </div>
            <div className='section section-blocks' id='section-dj'>
                <Achievement title="Beach Puppies" link="https://yorickdv.be/projects/1IMD/BeachPuppies/game.html" type="Game" place="1 XD" language="JavaScript" />
                <Achievement title="Cub Defender" link="https://yorickdv.be/projects/1IMD/clubdefender/portrait.html" type="Game" place="1 XD" language="JavaScript" />
                <Achievement title="Copoll" link="https://github.com/yoyoplayer12/desity" type="Community platform" place="2 XD" language="php" />
            </div>
            <div className='section section-blocks' id='section-design'>
                <Achievement title="Beach Puppies" link="https://yorickdv.be/projects/1IMD/BeachPuppies/game.html" type="Game" place="1 XD" language="JavaScript" />
                <Achievement title="Cub Defender" link="https://yorickdv.be/projects/1IMD/clubdefender/portrait.html" type="Game" place="1 XD" language="JavaScript" />
                <Achievement title="Copoll" link="https://github.com/yoyoplayer12/desity" type="Community platform" place="2 XD" language="php" />
            </div>
        </div>
    );
}
Home.defaultProps = {
  title: 'Default Title'
}
export default Home;