import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function FooterElement(props) {
    return (
        <footer className="m-0">
            <Container className="text-white">
                <Row className="pt-5 justify-content-center align-items-start">
                    <Col md="8">
                        <strong>
                            Sources
                        </strong>
                        <ul>
                            <li className="mt-2">API :
                                <a href="https://gis-kawalcovid19.hub.arcgis.com/search" target="_blank" rel="noopener noreferrer"> Kawal-Covid-ID</a>
                            </li>
                            <li className="mt-2">Icons :
                                <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer" title="Freepik">Freepik
                                </a>
                                from
                                <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer" title="Flaticon">
                                    www.flaticon.com
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md="2" className="mb-4 mb-lg-0 text-center text-lg-right">
                        <p className="font-weight-bold pb-1 mb-0">
                            <a href="tel:119" target="_blank"
                                rel="noopener noreferrer" style={{ fontSize: "2em" }}>119</a>
                        </p>
                        <p className="m-0 line-height-2" style={{ fontSize: "2em" }}> <strong> COVID-19 Hotline</strong></p>
                    </Col>
                </Row>
                <Row className="mt-4 p-2">
                    <Col className="text-center p-4">
                        <strong>
                            Muhammad Ilham Adhim © Copyright 2020. All Rights Reserved.
                                </strong>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterElement;
