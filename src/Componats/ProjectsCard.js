import { Col} from "react-bootstrap"

export const ProjectsCard = ({title,description, imgUrl, url}) =>{
    return(
        <Col sm={6} md={4} >
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br></br>
                    <a href={url} target="_blank" rel="noopener noreferrer">
            Ir a {title}
          </a>
                </div>
            </div>
        </Col>
    )
}