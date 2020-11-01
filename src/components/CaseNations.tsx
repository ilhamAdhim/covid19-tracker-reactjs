import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import "../styles/style.css";
import CaseNation from './CaseNation';
import { Col, Row } from 'react-bootstrap';

//Hard-coded import Images
import BrazilFlag from '../assets/brazil-flag-button-round-icon-128.png';
import USFlag from '../assets/us-flag-button-round-icon-128.png';
import unitedKingdomFlag from '../assets/united kingdom-flag-button-round-icon-128.png';

interface IProps {
    heading: string
}

export type INationData = {
    OBJECTID?: string | number | null | undefined;
    image?: string | undefined;
    0: {
        attributes: INation
    }
}

export type INation = {
    Active: number
    Confirmed: number
    Country_Region: string
    Deaths: number
    Last_Update: number
    Recovered: number
}

const CaseNations = (props: IProps) => {

    const defaultNations = [{
        name: 'US',
        imageSrc: USFlag
    }, {
        name: 'United Kingdom',
        imageSrc: unitedKingdomFlag
    }, {
        name: 'Brazil',
        imageSrc: BrazilFlag
    }];

    const [nations, setNations] = useState<INationData[]>([]);

    useEffect(() => {
        // Confirmed, recovered, death data from certain country
        async function callAPI() {
            let res = await fetch(`https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json`)
            return await res.json();
        }

        const dataListAllCountry = async () => {
            try {
                let finalResult: INationData[] = []
                const resAPI = await callAPI();
                defaultNations.forEach(nationItem => {
                    // Unclear type, needs to be fixed
                    let country: any = _.filter(resAPI.features, ['attributes.Country_Region', nationItem.name]);
                    country.image = nationItem.imageSrc;
                    finalResult.push(country);
                })
                setNations(finalResult);

            } catch (message) {
                console.log("Country is not defined");
            }
        }

        dataListAllCountry()
    }, [])

    return (
        <>
            <h1 className="text-center mb-4 mt-2">
                {props.heading}
            </h1>
            <Row>
                {nations.map((nation: INationData) => {
                    return (
                        <Col sm="12" md="4" >
                            <CaseNation key={nation.OBJECTID} value={nation[0].attributes} flagIcon={nation.image} />
                        </Col>
                    )
                })}
            </Row>
        </>
    );
};


export default CaseNations;