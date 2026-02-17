'use client';

import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const projects = [
    { title: "The Commerce Catalyst", desc: "High-Performance E-commerce Platform.", tech: [{ label: "Laravel", variant: "danger" }, { label: "MERN/Next.js", variant: "primary" }] },
    { title: "Sentinel AI", desc: "Predictive Analytics Dashboard.", tech: [{ label: "Multi-Tech", variant: "danger" }, { label: "Python", variant: "dark" }] },
    { title: "Operational Spark", desc: "Comprehensive Workflow Management System.", tech: [{ label: "CodeIgniter/MERN", variant: "danger" }, { label: "BDE Focus", variant: "success" }] },
    { title: "Visual Fire", desc: "Corporate Identity & UI/UX Revamp.", tech: [{ label: "AI Design", variant: "danger" }, { label: "Figma/UX", variant: "info" }] },
];

const PortfolioSection = () => (
    <section id="portfolio" className="py-5 py-lg-5" style={{ background: 'linear-gradient(to bottom, #fafafa, #ffffff)' }}>
        <Container>
            <div className="text-center mb-5 fade-in-up">
                <h2 className="display-4 fw-bold mb-3 text-dark" style={{ letterSpacing: '-0.02em' }}>
                    Our Portfolio: <span className="text-ignite-red">Ignited</span> Solutions
                </h2>
                <p className="lead text-dark" style={{ fontSize: '1.1rem', opacity: 0.8 }}>
                    Real projects, real impact. See the innovation we've created for our clients.
                </p>
            </div>

            <Row xs={1} md={2} lg={4} className="g-4">
                {projects.map((project, index) => (
                    <Col key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <Card className="h-100 shadow-sm border-0 ignited-card">
                            <Card.Body className="p-4">
                                <Card.Title className="fw-bold mb-3 text-dark" style={{ fontSize: '1.25rem' }}>
                                    {project.title}
                                </Card.Title>
                                <Card.Text className="small text-dark mb-3" style={{ lineHeight: '1.6', opacity: 0.7 }}>
                                    {project.desc}
                                </Card.Text>
                                <div className="d-flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <Badge 
                                            key={i} 
                                            bg={t.variant} 
                                            className="px-3 py-2"
                                            style={{ 
                                                borderRadius: '20px',
                                                fontSize: '0.75rem',
                                                fontWeight: 500
                                            }}
                                        >
                                            {t.label}
                                        </Badge>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
);

export default PortfolioSection;