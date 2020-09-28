import React from "react";
import doctorImage from "../assets/medic2.png";
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon,
  MDBBox,
} from "mdbreact";

import "mdbreact/dist/css/mdb.css";
import "../styles/style.css";

const HeroSection = ({
  lightBg,
  topLine,
  date,
  buttonDesc,
  image,
  imagePosition = "right",
}) => {
  const jumbotronContainerStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: imagePosition == "right" ? "row" : "row-reverse",
  };

  const speechBubbleStyleClass = `p-2 flex-item h-50 
   ${imagePosition == "right" ? "speech-bubble-left" : "speech-bubble-right"}`;

  const speechBubbleStyle = {
    height: "100%",
  };
  const imageStyle = {
    transform: "translate(0px,75px)",
    height: "600px",
  };
  return (
    <MDBJumbotron className="darken-4" style={{ boxShadow: "none" }}>
      <MDBContainer className="h-100">
        <MDBBox
          /* display="flex"
          flex={imagePosition == "right" ? "row" : "row-reverse"} */
          style={jumbotronContainerStyle}
        >
          <div className={speechBubbleStyleClass}>
            <div className="ml-4 title-jumbotron" style={{ color: "white" }}>
              <h1 className="display-3 p-4 title">Monitor COVID-19</h1>
              <p className="lead p-4 latest-update">Latest Update :</p>
              <hr className="white" />
              <p className="lead text-center p-2">
                <a href="#searchProvince">
                  <button
                    className="btn btn-indigo"
                    style={{ color: "white" }}
                    id="triggerButton"
                  >
                    Cari Provinsi Anda
                  </button>
                </a>
              </p>
            </div>
          </div>
          <div className="p-2 flex-item h-70">
            <div className="mr-2">
              <img
                src={doctorImage}
                style={imageStyle}
                className="img-fluid doctorImage-img"
                alt="DoctorImage Image"
              />
            </div>
          </div>
        </MDBBox>
      </MDBContainer>
    </MDBJumbotron>
  );
};
export default HeroSection;

{
  /* <div class="jumbotron darken-4 jumbotron-fluid shadow-none">
    <div class="container h-100">
        <div class="d-flex flex-sm-column flex-lg-row h-100 justify-content-center align-items-center">
            <div class="p-2 speech-bubble flex-fill h-50 " data-aos-delay="1000" data-aos="fade-up">        v
                <div class="ml-4 title-jumbotron text-white">
                    <h1 class="display-3 p-4 title">Monitor COVID-19</h1>
                    <p class="lead p-4 latest-update">Latest Update :</p>
                    <hr class="white">
                    <p class="lead text-center p-2">
                        <a href="#searchProvince">
                            <button class="btn btn-indigo text-white" id="triggerButton">
                                Cari Provinsi Anda
                            </button>
                        </a>
                    </p>
                </div>
            </div>
            <div class="p-2 flex-fill h-70" data-aos="fade-left" data-aos-delay="200">
                <div class="mr-2">
                    <img src="./src/assets/medic2.png" style="transform: translate(0px,75px); height: 600px;"
                        class="img-fluid doctorImage-img" alt="DoctorImage Image">
                </div>
            </div>
        </div>
    </div>
</div> */
}
