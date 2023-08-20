import { Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl,placeholderSrc, imgSrc }) => {
  const customClass = placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} className={`image ${customClass}`}/>
        <div className= "proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
