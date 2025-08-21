import React from 'react';
import NavBar from '../components/elements/NavBar';
import Footer from '../components/elements/Footer';
import TestimonialCard from '../components/elements/TestimonialCard';
import SectionTitle from '../components/elements/SectionTitle';
import MoreTools from '../components/elements/MoreTools';
import Container from '../components/layout/Container';
import Row from '../components/layout/Row';
import Column from '../components/layout/Column';
import ResponsiveHero from '../components/random-address/client/ResponsiveHero';

const faqs = [
  {
    question: 'What is a random address generator?',
    answer: 'A random address generator creates realistic, fictional addresses from various countries around the world. These addresses follow the proper formatting conventions for each country but are not real locations.',
  },
  {
    question: 'Are these real addresses?',
    answer: 'No, all generated addresses are fictional and created randomly. They follow realistic formatting patterns but do not correspond to actual locations or residences.',
  },
  {
    question: 'What countries are supported?',
    answer: 'Our random address generator supports major countries including the United States, United Kingdom, Canada, Australia, Germany, France, and Japan, with more countries being added regularly.',
  },
  {
    question: 'How can I use these addresses?',
    answer: 'Random address generator are useful for testing applications, form validation, educational purposes, creative writing, game development, and any scenario where you need realistic but fictional address data.',
  },
];

const testimonials = [
  {
    avatar: '/avatars/alex.jpg',
    name: 'Alex',
    text: 'Perfect for testing our e-commerce platform! The random address generator look completely realistic and cover all the formatting we need to validate.',
  },
  {
    avatar: '/avatars/linda.jpg',
    name: 'Linda',
    text: 'As a web developer, this random address generator tool saves me hours when I need test data. The international address formats are spot-on!',
  },
  {
    avatar: '/avatars/sam.jpg',
    name: 'Sam',
    text: 'Great for our logistics software testing. The variety of countries and realistic formatting makes our tests much more comprehensive.',
  },
  {
    avatar: '/avatars/emily.jpg',
    name: 'Emily',
    text: 'I use this random address generator for creative writing projects when I need authentic-sounding addresses from different countries. Simple and effective!',
  },
];

const RandomAddressPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <div style={{ background: '#f7f9fb', minHeight: '100vh' }}>
        {/* Hero Section */}
        <ResponsiveHero />

        {/* More Tools Section */}
        <MoreTools currentPath="/random-address-generator" />

        {/* Use Cases Section */}
        <div style={{ padding: '80px 0' }} id="use-cases">
          <Container>
            <SectionTitle>Use Cases for Random Addresses</SectionTitle>
            <Row gutter={[30, 30]}>
              <Column xs={24} md={8}>
                <div style={{ background: '#fff', padding: '25px', borderRadius: '10px', height: '100%', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Software Testing</h3>
                  <p>Perfect for testing web forms, e-commerce platforms, and applications that require address validation. Generate realistic test data instantly.</p>
                </div>
              </Column>
              <Column xs={24} md={8}>
                <div style={{ background: '#fff', padding: '25px', borderRadius: '10px', height: '100%', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Education & Learning</h3>
                  <p>Great for geography lessons, cultural studies, and teaching students about international address formats and conventions.</p>
                </div>
              </Column>
              <Column xs={24} md={8}>
                <div style={{ background: '#fff', padding: '25px', borderRadius: '10px', height: '100%', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Creative Projects</h3>
                  <p>Ideal for writers, game developers, and designers who need authentic-looking addresses for fictional characters or scenarios.</p>
                </div>
              </Column>
            </Row>
          </Container>
        </div>

        {/* FAQ Section */}
        <div style={{ background: '#fff', padding: '80px 0' }} id="faq">
          <Container>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
              {faqs.map(f => (
                <div key={f.question} style={{ marginBottom: 30, padding: 20, background: '#f9f9f9', borderRadius: 10 }}>
                  <h3 style={{ color: '#2c3e50', marginBottom: 10 }}>{f.question}</h3>
                  <p style={{ color: '#666', margin: 0 }}>{f.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* Testimonials Section */}
        <div style={{ background: '#f9f9f9', padding: '80px 0' }} id="testimonials">
          <Container>
            <SectionTitle>What Users Say About Our Random Address Generator</SectionTitle>
            <Row gutter={[30, 30]}>
              {testimonials.map(t => (
                <Column xs={24} md={12} lg={6} key={t.name}>
                  <TestimonialCard {...t} />
                </Column>
              ))}
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RandomAddressPage;