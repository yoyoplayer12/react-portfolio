import React, { useEffect } from 'react';
import Achievement from './components/Achievement';

function Home(props) {
    useEffect(() => {
        fetch("https://color-yyvm.onrender.com/api/v1/colors/")
            .then(response => response.json())
            .then(data => {
                var sections = document.querySelectorAll('.section');
                sections.forEach((section, index) => {
                    var palette = data.data[0].colors[Math.floor(Math.random() * data.data[0].colors.length)];
                    var dark = palette['color1'];
                    var lightdark = palette['color2'];
                    var maincolor = palette['color3'];
                    var light = palette['color4'];
                    var lightest = palette['color5'];
                    
                    assignBackgroundColorToElement(".dark-background", dark); // Assign color to element with id "element-1"
                    assignBackgroundColorToElement(".lightdark-background", lightdark); // Assign color to element with id "element-1"
                    assignBackgroundColorToElement(".maincolor-background", maincolor); // Assign color to element with id "element-1"
                    assignBackgroundColorToElement(".light-background", light); // Assign color to element with id "element-1"
                    assignBackgroundColorToElement(".lightest-background", lightest); // Assign color to element with id "element-1"
                    //colors
                    assignColorToElement(".dark-color", dark); // Assign color to element with id "element-1"
                    assignColorToElement(".lightdark-color", lightdark); // Assign color to element with id "element-1"
                    assignColorToElement(".maincolor-color", maincolor); // Assign color to element with id "element-1"
                    assignColorToElement(".light-color", light); // Assign color to element with id "element-1"
                    assignColorToElement(".lightest-color", lightest); // Assign color to element with id "element-1"
                    //set color names
                    document.getElementById("dark").innerHTML = "#" + dark;
                    document.getElementById("lightdark").innerHTML = "#" + lightdark;
                    document.getElementById("maincolor").innerHTML = "#" + maincolor;
                    document.getElementById("light").innerHTML = "#" + light;
                    document.getElementById("lightest").innerHTML = "#" + lightest;
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            function assignBackgroundColorToElement(elementclass, color) {
                var element = document.querySelectorAll(elementclass);
                for (var i = 0; i < element.length; i++) {
                    element[i].style.backgroundColor = '#' + color;
                }
            }
        
            function assignColorToElement(elementclass, color) {
                var element = document.querySelectorAll(elementclass);
                for (var i = 0; i < element.length; i++) {
                    element[i].style.color = '#' + color;
                }
            }
    }, []);

    return (
        <div>
            <section className='section-no-pad viewheight-centered-block dark-background lightest-color'>
                <a href="#section-1" className='fp-title lightest-color'>{props.title}</a>
            </section>
            <section className='section section-no-pad viewheight-centered-block lightdark-background lightest-color' id='section-1'>
                <a href="#section-code" className='mini-link-title lightest-color'>I Code</a>
                <a href="#section-dj" className='mini-link-title lightest-color'>I DJ</a>
                <a href="#section-design" className='mini-link-title lightest-color'>I Design</a>
            </section>
            <section className='section section-blocks dark-background lightest-color' id='section-code'>
                <Achievement title="Sofa Configurator" type="WordPress Website" place="Flux" language={["ACF", "WPML", "FormCraft", "WPbakery", "css3", "php", "html5"]} link="https://sofaconfigurator.com/" backgroundImage="" />
                <Achievement title="Table Configurator" type="WordPress Website" place="Flux" language={["ACF", "WPML", "FormCraft", "WPbakery", "css3", "php", "html5"]} link="https://table-configurator.com/" backgroundImage="https://portfolioyo.blob.core.windows.net/reactportfolio/tumbnails/table.jpg?sp=r&st=2024-04-22T12:02:05Z&se=2024-04-22T20:02:05Z&sv=2022-11-02&sr=c&sig=jlnpiTuEXfCgpgIEi4KMz0M6UUKsYMTO8osGsg84ErI%3D" />
                <Achievement title="PulsAid App" type="Android/IOS App" place="3 XD" language={['Flutter', "Dart", "Swift"]} workInProgress={true} link="https://github.com/yoyoplayer12/PulsAidApp" />
                <Achievement title="PulsAid Site" type="Static Website" place="3 XD" language={['html5', "css3", "JavaScript"]} workInProgress={true} link='https://pulsaid.be/en/index.html' backgroundImage="https://portfolioyo.blob.core.windows.net/reactportfolio/tumbnails/pulsaid.jpg?sp=r&st=2024-04-22T12:02:05Z&se=2024-04-22T20:02:05Z&sv=2022-11-02&sr=c&sig=jlnpiTuEXfCgpgIEi4KMz0M6UUKsYMTO8osGsg84ErI%3D" />
                <Achievement title="AED App" type="AI Proof of Concept (demo)" place="3 XD" language={["TensorFlow"]} />
                <Achievement title="Shoe configurator Backend" type="Backend configurator" place="3 XD" language={['Node.js', "MongoDB", "css3"]} link="https://shoeback.yorickdv.be" backgroundImage="https://portfolioyo.blob.core.windows.net/reactportfolio/tumbnails/swear-back.jpg?sp=r&st=2024-04-22T12:02:05Z&se=2024-04-22T20:02:05Z&sv=2022-11-02&sr=c&sig=jlnpiTuEXfCgpgIEi4KMz0M6UUKsYMTO8osGsg84ErI%3D" />
                <Achievement title="Shoe configurator" type="3D Configurator" place="3 XD" language={['ThreeJs', "VueJs", "css3"]} link="https://shoe.yorickdv.be" backgroundImage="https://portfolioyo.blob.core.windows.net/reactportfolio/tumbnails/swear.jpg?sp=r&st=2024-04-22T12:02:05Z&se=2024-04-22T20:02:05Z&sv=2022-11-02&sr=c&sig=jlnpiTuEXfCgpgIEi4KMz0M6UUKsYMTO8osGsg84ErI%3D" />
                <Achievement title="Copoll" type="Community platform" place="2 XD" language={['php', "MySql", "JavaScript", "html5", "css3"]} link="https://github.com/yoyoplayer12/desity" />
                <Achievement title="Cub Defender" type="Game" place="1 XD" language={["JavaScript", "css3"]} link="https://club.yorickdv.be" backgroundImage="https://portfolioyo.blob.core.windows.net/reactportfolio/tumbnails/corona.jpg?sp=r&st=2024-04-22T12:02:05Z&se=2024-04-22T20:02:05Z&sv=2022-11-02&sr=c&sig=jlnpiTuEXfCgpgIEi4KMz0M6UUKsYMTO8osGsg84ErI%3D" />
                <Achievement title="Beach Puppies" type="Game" place="1 XD" language={["JavaScript", "css3"]} link="https://puppies.yorickdv.be" backgroundImage="https://portfolioyo.blob.core.windows.net/reactportfolio/tumbnails/beach.jpg?sp=r&st=2024-04-22T12:02:05Z&se=2024-04-22T20:02:05Z&sv=2022-11-02&sr=c&sig=jlnpiTuEXfCgpgIEi4KMz0M6UUKsYMTO8osGsg84ErI%3D" />
            </section>
            <section className='section section-blocks lightdark-background lightest-color' id='section-dj'>
                <Achievement title="Go to www.zwabber.be" link="www.zwabber.be"/>
            </section>
            <section className='section section-blocks dark-background lightest-color' id='section-design'>
                <Achievement title="CSS Zengarden" link="https://zennn.yorickdv.be" type="Dance themed CSS Zengarden" place="2 XD" language={["css3", "html5"]} />
                <Achievement title="Animated deathproof poster" link="https://yorickdv.be/projects/2IMD/deathproof/death-proof.html" type="CSS Animation" place="2 XD" language={["css3", "html5"]} />
                <Achievement title="Animated shampoo logo" link="https://portfolioyo.blob.core.windows.net/video/shampoo.mp4?sp=r&st=2023-09-30T19:53:04Z&se=2027-08-03T03:53:04Z&sv=2022-11-02&sr=c&sig=b4BTmho%2FXbX6UNIkopLG5YWAoohui%2FhMWQr%2FFgEVEHE%3D" type="Motion animation" place="2 XD" language={["Apple Motion"]} />
                <Achievement title="Avicii google doodle" link="https://avicii.yorickdv.be" type="CSS Animation" place="1 XD" language={["css3", "html5"]} />
            </section>
            <section className='dark-background lightest-color'>
                <h2 className='lightest-color'>Contact</h2>
            </section>
        </div>
    );
}

export default Home;