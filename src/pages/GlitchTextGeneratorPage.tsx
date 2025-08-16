import React from 'react';
import NavBar from '../components/elements/NavBar';
import Footer from '../components/elements/Footer';
import SectionTitle from '../components/elements/SectionTitle';
import MoreTools from '../components/elements/MoreTools';
import Container from '../components/layout/Container';
import Row from '../components/layout/Row';
import Column from '../components/layout/Column';
import ResponsiveHero from '../components/glitch-text/client/ResponsiveHero';
import GlitchTextStructuredData from '../components/glitch-text/StructuredData';

const faqs = [
  {
    question: 'What is glitch text and how does it work?',
    answer: 'Glitch text, also known as "zalgo text" or "corrupted text," uses Unicode combining characters to create a distorted, chaotic appearance. Our generator applies various Unicode modifiers, diacritical marks, and special symbols to normal text to achieve this effect.'
  },
  {
    question: 'Is the generated glitch text safe to use?',
    answer: 'Yes, the glitch text is completely safe. It uses standard Unicode characters that are supported by most modern systems and applications. However, some platforms may have character limits or display issues with heavily distorted text.'
  },
  {
    question: 'Can I use glitch text on social media platforms?',
    answer: 'Most social media platforms support Unicode characters, so glitch text should work on platforms like Twitter, Instagram, Discord, and Facebook. However, some platforms may have filters or character limits that could affect display.'
  },
  {
    question: 'What\'s the difference between light, medium, and heavy intensity?',
    answer: 'Light intensity applies subtle character variations and basic diacritical marks. Medium intensity adds more combining characters and symbols. Heavy intensity uses the full range of Unicode modifiers, including zalgo characters, for maximum distortion.'
  },
  {
    question: 'Why can\'t I copy the text on some devices?',
    answer: 'Copy functionality depends on your browser and device capabilities. We provide multiple fallback methods including modern clipboard API, legacy methods, and manual copy options to ensure compatibility across all devices.'
  },
  {
    question: 'Does the glitch text work in all fonts?',
    answer: 'Glitch text appearance can vary depending on the font used. Monospace fonts typically display the effects most consistently, while some decorative fonts may not support all Unicode characters properly.'
  },
  {
    question: 'Can I customize the glitch effects?',
    answer: 'Currently, we offer three intensity levels (light, medium, heavy) that control the amount and type of glitch effects applied. Each level uses different combinations of Unicode characters to create varying degrees of distortion.'
  },
  {
    question: 'Is there a character limit for input text?',
    answer: 'Yes, we limit input to 500 characters to ensure optimal performance and prevent browser issues. This limit is sufficient for most use cases including social media posts, usernames, and creative projects.'
  }
];

const useCases = [
  {
    title: 'Social Media Posts',
    description: 'Create eye-catching posts and comments that stand out in feeds. Perfect for artistic expression and grabbing attention.',
    icon: '📱'
  },
  {
    title: 'Gaming Usernames',
    description: 'Design unique gaming handles and clan names with a cyberpunk or horror aesthetic that reflects your gaming persona.',
    icon: '🎮'
  },
  {
    title: 'Creative Writing',
    description: 'Add atmospheric effects to horror stories, cyberpunk narratives, or any creative writing that needs a digital corruption theme.',
    icon: '✍️'
  },
  {
    title: 'Digital Art Projects',
    description: 'Incorporate glitch text into digital artwork, memes, or graphic design projects for an authentic corrupted data aesthetic.',
    icon: '🎨'
  },
  {
    title: 'Website Headers',
    description: 'Create striking headers and titles for websites, especially those with dark, tech, or alternative themes.',
    icon: '💻'
  },
  {
    title: 'Event Promotions',
    description: 'Design promotional materials for electronic music events, gaming tournaments, or tech conferences with a glitch aesthetic.',
    icon: '🎪'
  }
];

const features = [
  {
    title: 'Real-time Preview',
    description: 'See your glitch text effects instantly as you type, with live updates for every character you enter.',
    icon: '⚡'
  },
  {
    title: 'Multiple Intensities',
    description: 'Choose from light, medium, or heavy glitch effects to match your creative vision and platform requirements.',
    icon: '🎚️'
  },
  {
    title: 'Batch Generation',
    description: 'Generate multiple unique variants of your text at once, giving you options to choose from.',
    icon: '🔄'
  },
  {
    title: 'One-Click Copy',
    description: 'Copy any generated variant to your clipboard instantly with our advanced copy system and fallback options.',
    icon: '📋'
  },
  {
    title: 'Mobile Optimized',
    description: 'Fully responsive design that works perfectly on smartphones, tablets, and desktop computers.',
    icon: '📱'
  },
  {
    title: 'No Registration',
    description: 'Start creating glitch text immediately without any sign-up process or personal information required.',
    icon: '🚀'
  }
];

const GlitchTextGeneratorPage: React.FC = () => {
  return (
    <>
      <GlitchTextStructuredData />
      <NavBar />
      <div style={{ background: '#f7f9fb', minHeight: '100vh' }}>
        {/* Hero Section with Client Component */}
        <ResponsiveHero />
        
        {/* More Tools Section */}
        <MoreTools currentPath="/glitch-text-generator" />
        
        {/* Features Section - Server Rendered */}
        <div style={{ background: '#fff', padding: '80px 0' }} id="features">
          <Container>
            <SectionTitle>Powerful Features</SectionTitle>
            <Row gutter={[30, 30]}>
              {features.map((feature, index) => (
                <Column xs={24} md={8} key={index}>
                  <div style={{ 
                    textAlign: 'center', 
                    padding: '30px 20px',
                    background: '#f9f9f9',
                    borderRadius: '10px',
                    height: '100%',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                  }}>
                    <div style={{ 
                      fontSize: '48px',
                      marginBottom: '20px'
                    }}>
                      {feature.icon}
                    </div>
                    <h3 style={{ marginBottom: '15px', color: '#2c3e50' }}>{feature.title}</h3>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>{feature.description}</p>
                  </div>
                </Column>
              ))}
            </Row>
          </Container>
        </div>
        
        {/* Use Cases Section - Server Rendered */}
        <div style={{ padding: '80px 0' }} id="use-cases">
          <Container>
            <SectionTitle>Creative Use Cases</SectionTitle>
            <Row gutter={[30, 30]}>
              {useCases.map((useCase, index) => (
                <Column xs={24} md={8} key={index}>
                  <div style={{ 
                    background: '#fff', 
                    padding: '25px', 
                    borderRadius: '10px', 
                    height: '100%', 
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                    border: '1px solid #e1e5e9'
                  }}>
                    <div style={{ 
                      fontSize: '32px',
                      marginBottom: '15px'
                    }}>
                      {useCase.icon}
                    </div>
                    <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>{useCase.title}</h3>
                    <p style={{ color: '#666', lineHeight: '1.6' }}>{useCase.description}</p>
                  </div>
                </Column>
              ))}
            </Row>
          </Container>
        </div>
        
        {/* How It Works Section - Server Rendered */}
        <div style={{ background: '#fff', padding: '80px 0' }} id="how-it-works">
          <Container>
            <SectionTitle>How It Works</SectionTitle>
            <Row gutter={[30, 30]}>
              <Column xs={24} md={8}>
                <div style={{ 
                  textAlign: 'center', 
                  padding: '30px 20px',
                  background: '#f9f9f9',
                  borderRadius: '10px',
                  height: '100%',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    background: '#e6f7ff', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '30px',
                    color: '#1890ff'
                  }}>
                    1
                  </div>
                  <h3 style={{ marginBottom: '15px' }}>Enter Your Text</h3>
                  <p>Type or paste any text into the input field. You can use letters, numbers, symbols, and even emoji.</p>
                </div>
              </Column>
              <Column xs={24} md={8}>
                <div style={{ 
                  textAlign: 'center', 
                  padding: '30px 20px',
                  background: '#f9f9f9',
                  borderRadius: '10px',
                  height: '100%',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    background: '#fff0f6', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '30px',
                    color: '#eb2f96'
                  }}>
                    2
                  </div>
                  <h3 style={{ marginBottom: '15px' }}>Choose Intensity</h3>
                  <p>Select from light, medium, or heavy glitch effects. Watch the real-time preview update as you change settings.</p>
                </div>
              </Column>
              <Column xs={24} md={8}>
                <div style={{ 
                  textAlign: 'center', 
                  padding: '30px 20px',
                  background: '#f9f9f9',
                  borderRadius: '10px',
                  height: '100%',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    background: '#f6ffed', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '30px',
                    color: '#52c41a'
                  }}>
                    3
                  </div>
                  <h3 style={{ marginBottom: '15px' }}>Generate & Copy</h3>
                  <p>Click generate to create multiple variants, then copy your favorite one with a single click.</p>
                </div>
              </Column>
            </Row>
          </Container>
        </div>
        
        {/* Technical Info Section - Server Rendered */}
        <div style={{ padding: '80px 0' }} id="technical-info">
          <Container>
            <SectionTitle>Technical Information In Glitch Text Generator</SectionTitle>
            <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
              <p style={{ marginBottom: '20px' }}>
                Our glitch text generator uses Unicode combining characters, also known as diacritical marks, 
                to create the corrupted appearance. These are legitimate Unicode characters that overlay or 
                modify base characters to create complex visual effects.
              </p>
              <p style={{ marginBottom: '20px' }}>
                The glitch text generator applies different types of Unicode modifiers based on the selected intensity:
              </p>
              <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Combining Diacritical Marks (U+0300-U+036F)</strong> - Basic accent marks and modifiers
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Combining Diacritical Marks Extended (U+1AB0-U+1AFF)</strong> - Additional combining characters
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Combining Half Marks (U+FE20-U+FE2F)</strong> - Specialized combining characters
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>Character Replacements</strong> - Similar-looking Unicode variants of standard letters
                </li>
              </ul>
              <p>
                All generated text uses standard Unicode characters and should be compatible with most 
                modern applications and platforms that support Unicode text rendering.
              </p>
            </div>
          </Container>
        </div>
        
        {/* FAQ Section - Server Rendered */}
        <div style={{ background: '#f9f9f9', padding: '80px 0' }} id="faq">
          <Container>
            <SectionTitle>Frequently Asked Questions About Glitch Text Generator</SectionTitle>
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
              {faqs.map(f => (
                <div key={f.question} style={{ 
                  marginBottom: 30, 
                  padding: 25, 
                  background: '#fff', 
                  borderRadius: 10, 
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  border: '1px solid #e1e5e9'
                }}>
                  <h3 style={{ color: '#2c3e50', marginBottom: 15, fontSize: '18px' }}>{f.question}</h3>
                  <p style={{ color: '#666', margin: 0, lineHeight: '1.6' }}>{f.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* Tips Section - Server Rendered */}
        <div style={{ background: '#fff', padding: '80px 0' }} id="tips">
          <Container>
            <SectionTitle>Pro Tips</SectionTitle>
            <Row gutter={[30, 30]}>
              <Column xs={24} md={12}>
                <div style={{ 
                  padding: '25px', 
                  background: '#e6f7ff', 
                  borderRadius: '10px',
                  border: '1px solid #91d5ff'
                }}>
                  <h3 style={{ color: '#1890ff', marginBottom: '15px' }}>💡 Best Practices With Glitch Text Generator</h3>
                  <ul style={{ color: '#666', paddingLeft: '20px', lineHeight: '1.6' }}>
                    <li style={{ marginBottom: '8px' }}>Start with light intensity for better readability</li>
                    <li style={{ marginBottom: '8px' }}>Test your glitch text on the target platform first</li>
                    <li style={{ marginBottom: '8px' }}>Keep important text readable by using moderate effects</li>
                    <li style={{ marginBottom: '8px' }}>Use heavy intensity sparingly for maximum impact</li>
                  </ul>
                </div>
              </Column>
              <Column xs={24} md={12}>
                <div style={{ 
                  padding: '25px', 
                  background: '#fff0f6', 
                  borderRadius: '10px',
                  border: '1px solid #ffadd6'
                }}>
                  <h3 style={{ color: '#eb2f96', marginBottom: '15px' }}>⚠️ Compatibility Notes</h3>
                  <ul style={{ color: '#666', paddingLeft: '20px', lineHeight: '1.6' }}>
                    <li style={{ marginBottom: '8px' }}>Some email clients may not display glitch text properly</li>
                    <li style={{ marginBottom: '8px' }}>Mobile keyboards might have issues with complex characters</li>
                    <li style={{ marginBottom: '8px' }}>Screen readers may have difficulty with heavily distorted text</li>
                    <li style={{ marginBottom: '8px' }}>Always have a plain text backup for important content</li>
                  </ul>
                </div>
              </Column>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GlitchTextGeneratorPage;