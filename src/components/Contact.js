
import 'animate.css';


import meter1 from "../assets/MemberLogo/FreddyImg.png";
import meter2 from "../assets/MemberLogo/DarleneImg.png";
import meter3 from "../assets/MemberLogo/LaeticiaImg.png";
import navIcon1 from '../assets/SocialIcons/nav-icon1.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

export const Contact = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  return (
    <section className="contact" id="team">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="team-bx  wow zoomIn">
                        <h2>Team</h2>
                        <p>At Baobab Games, we want to reproduce historical periods unknown to the general public and the industry with the help of our Engineers, historians and our artists. Through our games, our mission is to immerse our players in universes with diverse landscapes and cultures while allowing them to get closer and have fun.</p>
                        <h2></h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                           <div className="cardprofile">
                           <img src={meter1} />
                           <h1>Antabon Some</h1>
                           <p class="titleprofile">Founder & Lead Programmer</p>
                           <div className="social-icon">
                           <a href="https://www.linkedin.com/in/antabon-freddy-some-a2b1521ba"><img src={navIcon1} alt="" /></a>
                           </div>
                           <p> .</p>
                           </div>

                            

                           <div className="cardprofile">
                           <img src={meter2} />
                           <h1>Darlene Acouetey</h1>
                           <p class="titleprofile">Concept Artist</p>
                           <div className="social-icon">
                           <a href="https://www.linkedin.com/in/darlene-acouetey-29790025a/"><img src={navIcon1} alt="" /></a>
                           </div>
                           <p> .</p>
                           </div>


                           <div className="cardprofile">
                           <img src={meter3} />
                           <h1>Laetitia </h1>
                           <p class="titleprofile">3D Artist</p>
                           <div className="social-icon">
                           <a href="https://www.linkedin.com/in/laetitia-morand-0a0767165/"><img src={navIcon1} alt="" /></a>
                           </div>
                        
                           <p> .</p>
                           </div>
                           
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}