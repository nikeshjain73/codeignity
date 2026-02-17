'use client'; 

import Link from 'next/link';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useEffect } from 'react';

const AppNavbar = () => {
    // Import Bootstrap's JS bundle for client-side functionality
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <Navbar expand="lg" variant="dark" className="sticky-top" style={{
            background: 'rgba(10, 10, 15, 0.8)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}>
            <Container>
                <Link href="/" passHref legacyBehavior>
                    <Navbar.Brand className="fw-bold fs-4" style={{ letterSpacing: '-0.02em' }}>
                        <span className="text-ignite-red">Code</span>Ignity
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#solutions" className="text-ignite-light px-3" style={{ 
                            transition: 'all 0.3s ease',
                            fontWeight: 500
                        }} onMouseEnter={(e) => e.target.style.color = '#667eea'} 
                        onMouseLeave={(e) => e.target.style.color = '#f8f9fa'}>Solutions</Nav.Link>
                        <Nav.Link href="#portfolio" className="text-ignite-light px-3" style={{ 
                            transition: 'all 0.3s ease',
                            fontWeight: 500
                        }} onMouseEnter={(e) => e.target.style.color = '#667eea'} 
                        onMouseLeave={(e) => e.target.style.color = '#f8f9fa'}>Portfolio</Nav.Link>
                        <Nav.Link href="#team" className="text-ignite-light px-3" style={{ 
                            transition: 'all 0.3s ease',
                            fontWeight: 500
                        }} onMouseEnter={(e) => e.target.style.color = '#667eea'} 
                        onMouseLeave={(e) => e.target.style.color = '#f8f9fa'}>Team</Nav.Link>
                        <Nav.Link href="#contact" className="text-ignite-light px-3" style={{ 
                            transition: 'all 0.3s ease',
                            fontWeight: 500
                        }} onMouseEnter={(e) => e.target.style.color = '#667eea'} 
                        onMouseLeave={(e) => e.target.style.color = '#f8f9fa'}>Contact</Nav.Link>
                        <Nav.Link className="ms-lg-3" href="#internship">
                            <Button className="btn-ignite-primary btn-sm px-4">
                                Virtual Internship
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;