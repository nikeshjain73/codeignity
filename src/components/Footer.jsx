'use client';

import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-ignite-dark text-white py-5 position-relative" style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <Container>
                <Row className="g-4">
                    {/* Company Info */}
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5 className="fw-bold mb-3" style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}>
                            <span className="text-ignite-red">Code</span>Ignity
                        </h5>
                        <p className="text-ignite-light small mb-3" style={{ lineHeight: '1.7', opacity: 0.9 }}>
                            Igniting Solutions, Accelerating Growth. We transform complex challenges into scalable digital solutions.
                        </p>
                    </Col>

                    {/* Contact Info */}
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5 className="fw-bold mb-3 text-ignite-red" style={{ fontSize: '1.2rem' }}>Contact Us</h5>
                        <div className="text-ignite-light small">
                            <p className="mb-3 d-flex align-items-center" style={{ fontSize: '0.95rem' }}>
                                <i className="bi bi-geo-alt-fill me-3" style={{ 
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    fontSize: '1.2rem'
                                }}></i>
                                <span>123 Business Street, Tech City, TC 12345</span>
                            </p>
                            <p className="mb-0 d-flex align-items-center" style={{ fontSize: '0.95rem' }}>
                                <i className="bi bi-telephone-fill me-3" style={{ 
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    fontSize: '1.2rem'
                                }}></i>
                                <a href="tel:+1234567890" className="text-ignite-light text-decoration-none" style={{
                                    transition: 'all 0.3s ease'
                                }} onMouseEnter={(e) => e.target.style.color = '#00f2fe'} 
                                onMouseLeave={(e) => e.target.style.color = '#f8f9fa'}>
                                    +1 (234) 567-890
                                </a>
                            </p>
                        </div>
                    </Col>

                    {/* Social Media */}
                    <Col md={4}>
                        <h5 className="fw-bold mb-3 text-ignite-red" style={{ fontSize: '1.2rem' }}>Follow Us</h5>
                        <div className="d-flex gap-4">
                            <a 
                                href="https://instagram.com/codeignity" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white text-decoration-none"
                                aria-label="Instagram"
                            >
                                <i className="bi bi-instagram fs-3 hover-icon"></i>
                            </a>
                            <a 
                                href="https://linkedin.com/company/codeignity" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white text-decoration-none"
                                aria-label="LinkedIn"
                            >
                                <i className="bi bi-linkedin fs-3 hover-icon"></i>
                            </a>
                            <a 
                                href="https://github.com/codeignity" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white text-decoration-none"
                                aria-label="GitHub"
                            >
                                <i className="bi bi-github fs-3 hover-icon"></i>
                            </a>
                        </div>
                    </Col>
                </Row>

                <hr className="my-4" style={{ 
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    opacity: 0.5
                }} />

                {/* Copyright */}
                <Row>
                    <Col className="text-center">
                        <p className="mb-0 small text-ignite-light" style={{ opacity: 0.8 }}>
                            &copy; {new Date().getFullYear()} CodeIgnity. All rights reserved. Igniting Solutions Since Day One.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

