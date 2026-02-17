import AppNavbar from '../components/AppNavbar';
import HeroSection from '../components/HeroSection';
import TeamSection from '../components/TeamSection';
import PortfolioSection from '../components/PortfolioSection';
import InternshipSection from '../components/InternshipSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';

// Static Solutions/Expertise Section (can be moved to its own component if needed)
const SolutionsSection = () => (
    <section id="solutions" className="py-5 py-lg-5" style={{ background: '#ffffff' }}>
        <Container className="text-center">
            <div className="fade-in-up">
                <h2 className="display-4 fw-bold mb-4 text-dark" style={{ letterSpacing: '-0.02em' }}>
                    Our Core <span className="text-ignite-red">Expertise</span>
                </h2>
                <p className="lead text-dark" style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto', opacity: 0.8 }}>
                    Full-Stack Development, Multi-Tech Solutions, Creative Design, and Virtual Internship Programs.
                </p>
            </div>
        </Container>
    </section>
);


export default function Home() {
  return (
    <>
      <AppNavbar />
      <main>
        <HeroSection />
        <SolutionsSection />
        <PortfolioSection />
        <TeamSection />
        <InternshipSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
}