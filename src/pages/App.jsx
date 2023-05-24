import React from 'react';
import { Layout,Layouexperience } from '../components/Layout';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Experience from '../sections/Experience';
import Footer from '../sections/Footer';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <Layout>
        <Services />
      </Layout>
      <Footer /> 
    </>
  );
}

export default App;
