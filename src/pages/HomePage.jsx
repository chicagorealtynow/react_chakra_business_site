import React from 'react';
    import HeroSection from '../components/HeroSection';
    import ServicesOverview from '../components/ServicesOverview';
    import WhyChooseUs from '../components/WhyChooseUs';
    import ServiceAreaMap from '../components/ServiceAreaMap';
    import FAQSection from '../components/FAQSection';
    import Footer from '../components/Footer';
    import Navigation from '../components/Navigation';

    const HomePage = () => {
      return (
        <>
          <Navigation />
          <HeroSection />
          <ServicesOverview />
          <WhyChooseUs />
          <ServiceAreaMap />
          <FAQSection />
          <Footer />
        </>
      );
    };

    export default HomePage;
