import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AdviceItem from './components/AdviceItem';
import FooterElement from './components/FooterElement';
import SearchBar from './components/SearchBar';
import CaseNations from './components/CaseNations'

// Added animate on Scroll library
import AOS from 'aos';
import 'aos/dist/aos.css';

//Images
import batukSiku from './assets/batuk-dengan-siku.png'
import cuciTangan from './assets/cuci-tangan.png'
import physicalDistancing from './assets/physical-distancing.png'
import makanSehat from './assets/makan-sehat.png'
import tetapBerolahraga from './assets/tetap-berolahraga.png'
import hindariKeramaian from './assets/hindari-keramaian.png'
import { Container, Row } from 'react-bootstrap';


const App = () => {

  useEffect(() => AOS.init(), [])

  return (
    <>
      <HeroSection date={new Date().toDateString()} buttonDesc="Cari Provinsi Anda" topLine="Monitor COVID-19" />
      <Container data-aos="zoom-out-right">
        <SearchBar />

        <hr />
        <CaseNations defaultNations={['US', 'United Kingdom', 'Brazil']} data-aos="zoom-out-left"></CaseNations>
        <hr />
        <Row className="text-center">
          <AdviceItem imageSrc={batukSiku} caption="Gunakan siku ketika batuk atau bersin" />
          <AdviceItem imageSrc={cuciTangan} caption="Cuci tangan dengan sabun" />
          <AdviceItem imageSrc={physicalDistancing} caption="Jaga jarak di area publik" />
        </Row>
        <Row className="text-center">
          <AdviceItem imageSrc={makanSehat} caption="Jaga imunitas tubuh dengan makanan sehat" />
          <AdviceItem imageSrc={tetapBerolahraga} caption="Rutin berolahraga" />
          <AdviceItem imageSrc={hindariKeramaian} caption="Gunakan masker" />
        </Row>

      </Container>
      <FooterElement />
    </>
  );
}

export default App;
