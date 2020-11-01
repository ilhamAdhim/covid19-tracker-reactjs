import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { INation } from './CaseNations';

interface IProps {
    flagIcon: string | undefined;
    value: INation
}


const CaseNation = (props: IProps) => {
    return (
        <Card style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", marginBottom: "2em" }}>
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
                            Sembuh  {props.value.Recovered.toLocaleString()}
                        </Col>
                        <Col className="p-2 text-warning">
                            Positif  {props.value.Confirmed.toLocaleString()}
                        </Col>
                        <Col className="p-2 text-danger">
                            Meninggal {props.value.Deaths.toLocaleString()}
                        </Col>
                    </Row>
                </Card.Body>
            </Container>
        </Card>
    );
};


export default CaseNation;