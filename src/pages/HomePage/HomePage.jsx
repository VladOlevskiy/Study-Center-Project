import Hero from '../../components/Hero/Hero';
import MainInfoHome from '../../components/MainInfoHome/MainInfoHome';
import Features from 'components/Features/Features';
import Reviews from '../../components/Reviews/Reviews';
import ContactFormSection from 'components/ContactFormSection/ContactFormSection';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Reviews />
      <MainInfoHome />
      <ContactFormSection />
    </>
  );
};

export default Home;
