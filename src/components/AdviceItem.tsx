import React from "react";
import { Col } from "react-bootstrap";

import "../styles/style.css";

interface IProps {
    imageSrc : string
    caption : string
    altText? : string
}

const AdviceItem = ({imageSrc,altText,caption} : IProps) => {
  return (
    <Col sm="12" md="4" className="p-2" data-aos="zoom-out-left" data-aos-delay="200">
      <img src={imageSrc} height="200px" width="200" alt={altText} />
      <p className="text-detail text-center p-3">{caption}</p>
    </Col>
  );
};

export default AdviceItem;
