import React from 'react';
import { Row } from 'react-bootstrap';

//images 
import batukSiku from '../assets/batuk-dengan-siku.png'
import cuciTangan from '../assets/cuci-tangan.png'
import physicalDistancing from '../assets/physical-distancing.png'
import makanSehat from '../assets/makan-sehat.png'
import tetapBerolahraga from '../assets/tetap-berolahraga.png'
import hindariKeramaian from '../assets/hindari-keramaian.png'
import AdviceItem from './AdviceItem';

interface IProps{
    heading : string
}

const Advices = (props : IProps) => {
    return (
        <>
            <h1 className="text-center mb-4 mt-2">
                {props.heading}
            </h1>
            <Row className="text-center">
                <AdviceItem imageSrc={batukSiku} caption="Gunakan siku ketika batuk atau bersin" />
                <AdviceItem imageSrc={cuciTangan} caption="Cuci tangan dengan sabun" />
                <AdviceItem imageSrc={physicalDistancing} caption="Jaga jarak di area publik" />
                <AdviceItem imageSrc={makanSehat} caption="Jaga imunitas tubuh dengan makanan sehat" />
                <AdviceItem imageSrc={tetapBerolahraga} caption="Rutin berolahraga" />
                <AdviceItem imageSrc={hindariKeramaian} caption="Gunakan masker" />
            </Row>
        </>
    );
};

export default Advices;