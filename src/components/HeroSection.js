import React from "react";
import { Container, Jumbotron, Row, Col, Button } from "react-bootstrap";
import doctorImage from "../assets/medic2.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";

const HeroSection = ({ topLine, date, buttonDesc, image = doctorImage }) => {
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
          <Col md="4" sm="12" className="h-80 p-2">
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

// <div class="jumbotron darken-4 jumbotron-fluid shadow-none">
// <div class="container h-100">
//     <div class="d-flex flex-sm-column flex-lg-row h-100 justify-content-center align-items-center">
//         <div class="p-2 speech-bubble flex-fill h-50 " data-aos-delay="1000" data-aos="fade-up">
//             <div class="ml-4 title-jumbotron text-white">
//                 <h1 class="display-3 p-4 title">Monitor COVID-19</h1>
//                 <p class="lead p-4 latest-update">Latest Update :
//                 </p>
//                 <hr class="white">
//                 <p class="lead text-center p-2">
//                     <a href="#searchProvince">
//                         <button class="btn btn-indigo text-white" id="triggerButton">
//                             Cari Provinsi Anda
//                         </button>
//                     </a>
//                 </p>
//             </div>
//         </div>
//         <div class="p-2 flex-fill h-70" data-aos="fade-left" data-aos-delay="200">
//             <div class="mr-2">
//                 <img src="./src/assets/medic2.png" style="transform: translate(0px,75px); height: 600px;"
//                     class="img-fluid doctor-img" alt="Doctor Image">
//             </div>
//         </div>
//     </div>
// </div>
// </div>
