import React from "react";
import { Container, Jumbotron, Row, Col, Button } from "react-bootstrap";
import doctorImage from "../assets/medic2.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";

interface IProps{
    topLine : string
    date : string
    buttonDesc : string
    image? : string
}

const HeroSection = ({ topLine, date, buttonDesc, image = doctorImage } : IProps) => {
  const imageStyle = {
    transform: "translate(0px,75px)",
  };

  const hrStyle = { borderTop: "1px solid white" };
  return (
    <Jumbotron fluid className="darken-4" style={{ boxShadow: "none" }}>
      <Container>
        <Row>
          <Col
            md="8"
            sm="12"
            className="speech-bubble"
            style={{ height: "100%", marginTop: "5em" }}
            data-aos-delay="1000" data-aos="fade-up"
          >
            <div className="ml-4 title-jumbotron text-white">
              <h1 className="display-3 p-4 title">{topLine}</h1>
              <p className="lead p-4 latest-update">Latest Update : {date}</p>
              <hr style={hrStyle} />
              <p className="lead p-2 text-center">
                <a href="#searchProvince">
                  <Button
                    className="text-white p-3"
                    style={{
                      backgroundColor: "#3949ab",
                    }}
                    id="triggerButton"
                  >
                    {buttonDesc}
                  </Button>
                </a>
              </p>
            </div>
          </Col>
          <Col md="4" sm="12" className="h-80 p-2" data-aos="fade-left" data-aos-delay="200">
            <img
              src={image}
              className="img-fluid"
              style={imageStyle}
              alt="DoctorImage Image"
            />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};
export default HeroSection;
