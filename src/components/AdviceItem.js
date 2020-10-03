import React from "react";
import { Col } from "react-bootstrap";

import "../styles/style.css";

const AdviceItem = ({ imageSrc, caption, altText }) => {
  return (
    <Col className="p-2">
      <img src={imageSrc} height="200px" width="200" alt={altText} />
      <p className="text-detail text-center p-3">{caption}</p>
    </Col>
  );
};

export default AdviceItem;
