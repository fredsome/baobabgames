import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Cap1.jpg";
import projImg2 from "../assets/img/Cap2.jpg";
import projImg3 from "../assets/img/Cap3.png";
import projImg4 from "../assets/img/Cap4.jpg";
import projImg5 from "../assets/img/Cap5.png";
import projImg6 from "../assets/img/Cap6.png";
import projImg7 from "../assets/img/Cap7.png";
import projImg8 from "../assets/img/Cap8.png";
import projImg9 from "../assets/img/Cap9.png";
import projImg10 from "../assets/img/Cap10.png";
import projImg11 from "../assets/img/Cap11.png";
import logoDion from "../assets/img/Logo-Dion.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "",
      description: "Baobab Games",
      imgUrl: projImg1,
    },
    {
      title: "",
      description: "Baobab Games",
      imgUrl: projImg5,
    },
    {
      title: "",
      description: "Baobab Games",
      imgUrl: projImg2,
    },
    {
      title: "",
      description: "Baobab Games",
      imgUrl: projImg10,
    },
    {
      title: "",
      description: "Baobab Games",
      imgUrl: logoDion,
    },
    {
      title: "",
      description: "Baobab Games",
      imgUrl: projImg9,
    },
    {
      title: "",
      description: "Baobab Games",
      imgUrl: projImg3,
    },
    {
      title: "",
      description: "Baobab Games",
      imgUrl: projImg11,
    },
    {
      title: "",
      description: "Baobab Games",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
          <div className="team-bx  wow zoomIn" >
                <h1>Projects</h1>
                <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__pulse": ""}>
                <p>Baobab Games is the creator of Dion which is a multiplayer survival game set in a fantastic world inspired by West African Empires.

Step into the shoes of an hunter and embark on daring raids to obtain powerful sorcery artifacts as well as technologies from other eras.</p>
</div>}
            </TrackVisibility>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
