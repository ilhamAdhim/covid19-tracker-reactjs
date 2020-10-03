import React from 'react';
import HeroSection from './components/HeroSection';
import AdviceItem from './components/AdviceItem';
import FooterElement from './components/FooterElement';
import SearchBar from './components/SearchBar';


//Images
import batukSiku from './assets/batuk-dengan-siku.png'
import cuciTangan from './assets/cuci-tangan.png'
import physicalDistancing from './assets/physical-distancing.png'
import makanSehat from './assets/makan-sehat.png'
import tetapBerolahraga from './assets/tetap-berolahraga.png'
import hindariKeramaian from './assets/hindari-keramaian.png'
import { Container, Row } from 'react-bootstrap';


const App = () => {


  return (
    <>
      <HeroSection date={new Date().toDateString()} buttonDesc="Cari Provinsi Anda" topLine="Monitor COVID-19" />
      <Container>
        <SearchBar />

        <hr />

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
