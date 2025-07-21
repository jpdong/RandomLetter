import React from 'react';
import Container from '../components/layout/Container';
import Footer from '../components/elements/Footer';
import NavBar from '../components/elements/NavBar';

const TermsOfUsePage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <div className="page-content">
          <h1>Terms of Use</h1>
          <p>
            Last updated: July 3, 2025
          </p>
          <p>
            Please read these Terms of Use ("Terms", "Terms of Use") carefully before using the MultiRun website (the "Service") operated by MultiRun ("us", "we", or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>
          <p>
            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
          </p>

          <h2>Accounts</h2>
          <p>
            When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of MultiRun and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of MultiRun.
          </p>

          <h2>Links To Other Web Sites</h2>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by MultiRun. MultiRun has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that MultiRun shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
          </p>

          <h2>Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us.
          </p>
          <p>
            dongshan1025@gmail.com
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default TermsOfUsePage;