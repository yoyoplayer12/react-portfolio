import React from 'react';
import Achievement from './components/Achievement';
function Home(props) {
  
    return (
        <div>
            <div className='section section-no-pad viewheight-centered-block'>
                <a href="#section-1" className='fp-title'>{props.title}</a>
            </div>
            <div className='section section-no-pad viewheight-centered-block' id='section-1'>
                <a href="#section-code" className='mini-link-title'>I Code</a>
                <a href="#section-dj" className='mini-link-title'>I DJ</a>
                <a href="#section-design" className='mini-link-title'>I Design</a>
            </div>
            <div className='section section-blocks' id='section-code'>
                <Achievement title="Table Configurator" type="WordPress Website" place="Flux" language={["ACF", "WPML", "FormCraft", "WPbakery", "css3", "php", "html5"]} link="https://table-configurator.com/" backgroundImage="https://portfolionew.blob.core.windows.net/reactportfolio/tumbnails/table.jpg?sp=r&st=2024-04-17T20:45:31Z&se=2030-05-30T04:45:31Z&sv=2022-11-02&sr=c&sig=UoY29m8gupSv%2FqVCsVJkvOQPOjKWJcUI%2F4u2RECR58o%3D" />
                <Achievement title="PulsAid App" type="Android/IOS App" place="3 XD" language={['Flutter', "Dart", "Swift"]} workInProgress={true} link="https://github.com/yoyoplayer12/PulsAidApp" />
                <Achievement title="PulsAid Site" type="Static Website" place="3 XD" language={['html5', "css3", "JavaScript"]} workInProgress={true} link='https://pulsaid.be/en/index.html' backgroundImage="https://portfolionew.blob.core.windows.net/reactportfolio/tumbnails/pulsaid.jpg?sp=r&st=2024-04-17T20:45:31Z&se=2030-05-30T04:45:31Z&sv=2022-11-02&sr=c&sig=UoY29m8gupSv%2FqVCsVJkvOQPOjKWJcUI%2F4u2RECR58o%3D" />
                <Achievement title="AED App" type="AI Proof of Concept (demo)" place="3 XD" language={["TensorFlow"]} />
                <Achievement title="Shoe configurator Backend" type="Backend configurator" place="3 XD" language={['Node.js', "MongoDB", "css3"]} link="https://shoeback.yorickdv.be" backgroundImage="https://portfolionew.blob.core.windows.net/reactportfolio/tumbnails/swear-back.jpg?sp=r&st=2024-04-17T20:45:31Z&se=2030-05-30T04:45:31Z&sv=2022-11-02&sr=c&sig=UoY29m8gupSv%2FqVCsVJkvOQPOjKWJcUI%2F4u2RECR58o%3D" />
                <Achievement title="Shoe configurator" type="3D Configurator" place="3 XD" language={['ThreeJs', "VueJs", "css3"]} link="https://shoe.yorickdv.be" backgroundImage="https://portfolionew.blob.core.windows.net/reactportfolio/tumbnails/swear.jpg?sp=r&st=2024-04-17T20:45:31Z&se=2030-05-30T04:45:31Z&sv=2022-11-02&sr=c&sig=UoY29m8gupSv%2FqVCsVJkvOQPOjKWJcUI%2F4u2RECR58o%3D" />
                <Achievement title="Copoll" type="Community platform" place="2 XD" language={['php', "MySql", "JavaScript", "html5", "css3"]} link="https://github.com/yoyoplayer12/desity" />
                <Achievement title="Cub Defender" type="Game" place="1 XD" language={["JavaScript", "css3"]} link="https://clubdefender.yorickdv.be" backgroundImage="https://portfolionew.blob.core.windows.net/reactportfolio/tumbnails/corona.jpg?sp=r&st=2024-04-17T20:45:31Z&se=2030-05-30T04:45:31Z&sv=2022-11-02&sr=c&sig=UoY29m8gupSv%2FqVCsVJkvOQPOjKWJcUI%2F4u2RECR58o%3D" />
                <Achievement title="Beach Puppies" type="Game" place="1 XD" language={["JavaScript", "css3"]} link="https://beach.yorickdv.be" backgroundImage="https://portfolionew.blob.core.windows.net/reactportfolio/tumbnails/beach.jpg?sp=r&st=2024-04-17T20:45:31Z&se=2030-05-30T04:45:31Z&sv=2022-11-02&sr=c&sig=UoY29m8gupSv%2FqVCsVJkvOQPOjKWJcUI%2F4u2RECR58o%3D" />
            </div>
            <div className='section section-blocks' id='section-dj'>
                <Achievement title="Go to www.zwabber.be" link="www.zwabber.be"/>
            </div>
            <div className='section section-blocks' id='section-design'>
                <Achievement title="CSS Zengarden" link="https://zengarden.yorickdv.be" type="Dance themed CSS Zengarden" place="2 XD" language={["css3", "html5"]} />
                <Achievement title="Animated deathproof poster" link="https://yorickdv.be/projects/2IMD/deathproof/death-proof.html" type="CSS Animation" place="2 XD" language={["css3", "html5"]} />
                <Achievement title="Animated shampoo logo" link="https://portfolionew.blob.core.windows.net/video/shampoo.mp4?sp=r&st=2023-09-30T19:53:04Z&se=2027-08-03T03:53:04Z&sv=2022-11-02&sr=c&sig=b4BTmho%2FXbX6UNIkopLG5YWAoohui%2FhMWQr%2FFgEVEHE%3D" type="Motion animation" place="2 XD" language={["Apple Motion"]} />
                <Achievement title="Avicii google doodle" link="https://yorickdv.be/projects/1IMD/doodle/index.html" type="CSS Animation" place="1 XD" language={["css3", "html5"]} />
            </div>
        </div>
    );
}
Home.defaultProps = {
  title: 'Default Title'
}
export default Home;