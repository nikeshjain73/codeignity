'use client';

import { Container, Button } from 'react-bootstrap';

const HeroSection = () => (
    <section className="bg-ignite-dark text-white text-center py-5 py-lg-6 position-relative" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        {/* Animated Background Elements */}
        <div className="position-absolute w-100 h-100" style={{ 
            background: 'radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0, 242, 254, 0.15) 0%, transparent 50%)',
            zIndex: 0
        }}></div>
        
        <Container className="col-xxl-8 px-4 py-5 position-relative" style={{ zIndex: 1 }}>
            <div className="fade-in-up">
                <h1 className="display-2 fw-bold mb-4" style={{ 
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.03em'
                }}>
                    <span className="text-white">CodeIgnity:</span>{' '}
                    <span className="text-ignite-red">Igniting</span> Solutions.
                </h1>
                <p className="lead mb-5 text-ignite-light" style={{ 
                    fontSize: '1.25rem',
                    maxWidth: '700px',
                    margin: '0 auto 2rem',
                    opacity: 0.9
                }}>
                    We transform complex challenges into fast-catching, scalable solutions that spark widespread digital transformation.
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center mb-5">
                    <Button className="btn-ignite-primary btn-lg px-5 py-3 fw-bold" href="#solutions">
                        Explore Our Expertise &rarr;
                    </Button>
                    <Button className="btn-ignite-outline-light btn-lg px-5 py-3" href="#portfolio">
                        View Our Portfolio
                    </Button>
                </div>
            </div>
        </Container>
    </section>
);

export default HeroSection;