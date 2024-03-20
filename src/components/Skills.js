import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import 'animate.css';
import {LanguageContext} from './contextLang'
import traduction from './traduction';
import React, {useContext} from 'react';
import TrackVisibility from 'react-on-screen';


export const Skills = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you dfde.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const { language } = useContext(LanguageContext)
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                   
                        <h1> {traduction[language].Abouttitle}</h1>
                        <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__pulse": ""}>
                        <p> {traduction[language].DescriptionAbout}</p>
         
                        </div>}
            </TrackVisibility>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
