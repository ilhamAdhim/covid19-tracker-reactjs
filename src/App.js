import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AdviceItem from './components/AdviceItem';
import FooterElement from './components/FooterElement';
import SearchBar from './components/SearchBar';
import CaseNations from './components/CaseNations'

// Added animate on Scroll library
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Container, Row } from 'react-bootstrap';
import Advices from './components/Advices';


const App = () => {

  useEffect(() => AOS.init(), [])

  return (
    <>
      <HeroSection date={new Date().toDateString()} buttonDesc="Cari Provinsi Anda" topLine="Monitor COVID-19" />
      <Container data-aos="zoom-out-right">
        <SearchBar />

        <hr />
        <CaseNations data-aos="zoom-out-left" heading="Top 3 Global Cases"></CaseNations>
        <hr />
        <Advices heading="Sayangi Diri dan Lingkungan Anda" />

      </Container>
      <FooterElement />
    </>
  );
}

export default App;
