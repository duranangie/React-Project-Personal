import { Container, Col, Tab, Row, Nav } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/image.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"


export const Projects = () => {

    const projects = [
        {
            title: "weather app",
            description: "aplication web",
            imgUrl: projImg1,
            url: "https://duranangie.github.io/weatherio-starter-master/#/weather?lat=51.5073219&lon=-0.1276474"
        },
        {
            title: "app movil",
            description: "app movil by instructs gym",
            imgUrl: projImg2,
        },
        {
            title: "app movil",
            description: "app movil by instructs gym",
            imgUrl: projImg3,
        }

        
    ]



    

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Here you will find a selection of projects that I have had the pleasure of completing.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first" >
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Projects</Nav.Link>
                            </Nav.Item>
                           <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" >
                                Tab Two
                                </Nav.Link>
                            </Nav.Item> 
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) =>{
                                            return(
                                                <ProjectsCard 
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row>
                                    {
                                        projects.map((project, index) =>{
                                            return(
                                                <ProjectsCard 
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Row>
                                    {
                                        projects.map((project, index) =>{
                                            return(
                                                <ProjectsCard 
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
                    </Col>
                </Row>

            </Container>

              <img className="background-image-right" src={colorSharp2}></img>                          
                        


        </section>
    )
}