import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const CaseNation = (props) => {
    console.log(props)
    return (
        <Card className="mb-2">
            <Container className="p-2">
                <Row>
                    <Col sm="4" className="text-center">
                        <Card.Img className="center" src={props.flagIcon} alt={props.flagIcon} style={{ height: '60px', width: '60px' }} />
                    </Col>
                    <Col sm="8" className="text-center text-dark">
                        <Card.Title>
                            {props.value.Country_Region}
                        </Card.Title>
                    </Col>
                </Row>
                <hr />
                <Card.Body className="p-2" style={{ padding: 0 }}>
                    <Row className="text-center">
                        <Col className="p-2 text-success">
                            Sembuh  {props.value.Recovered.toLocaleString("en")}
                        </Col>
                        <Col className="p-2 text-warning">
                            Positif  {props.value.Confirmed.toLocaleString("en")}
                        </Col>
                        <Col className="p-2 text-danger">
                            Meninggal {props.value.Deaths.toLocaleString("en")}
                        </Col>
                    </Row>
                </Card.Body>
            </Container>
        </Card>
    );
};


export default CaseNation;