import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import CaseNations from './components/CaseNations'

// Added animate on Scroll library
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Container } from 'react-bootstrap';
import Advices from './components/Advices';
import TableRegion from './components/TableRegion';
import { RegionProvider } from './components/RegionContext';

export type IRegion = {

}

export type INation = {
  OBJECTID?: string | number | null | undefined;
  image?: string | undefined;
}

const App = () => {

  useEffect(() => {
    document.title = "Monitor COVID-19"
    AOS.init();
  }, [])

  return (
    <>
      <HeroSection date={new Date().toDateString()} buttonDesc="Cari Provinsi Anda" topLine="Monitor COVID-19" />
      <Container data-aos="zoom-out-right">
        <RegionProvider heading="Kasus di Indonesia">
          <SearchBar />
          <TableRegion />
        </RegionProvider>
        <hr />
        <CaseNations data-aos="zoom-out-left" heading="Top 3 Global Cases"></CaseNations>
        <hr />
        <Advices heading="Sayangi Diri dan Lingkungan Anda" />

      </Container>
      <Footer />
    </>
  );
}

export default App;
