'use client';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const InternshipSection = () => (
    <section id="internship" className="py-5 py-lg-5 bg-ignite-dark text-white">
        <Container className="text-center">
            <h2 className="display-5 fw-bold mb-3">
                <i className="bi bi-laptop text-ignite-red me-2"></i> Virtual <span className="text-ignite-red">Internship</span> Program
            </h2>
            <p className="lead mb-4 text-ignite-light">Join the <strong>CodeIgnity Track</strong>: Virtual Internship with Real-Time Impact. Work from anywhere, learn from the best.</p>

            <Row className="justify-content-center">
                <Col lg={8}>
                    <Card className="bg-dark border-ignite-red p-4 shadow-lg text-start">
                        <div className="mb-3 text-center">
                            <i className="bi bi-laptop fs-1 text-ignite-red mb-2 d-block"></i>
                            <h4 className="text-white fw-bold">100% Virtual Internship</h4>
                            <p className="text-ignite-light small mb-0">Work remotely from anywhere in the world</p>
                        </div>
                        
                        <p className="fw-semibold text-ignite-light">
                            We provide <strong>virtual internships</strong> that offer real-world experience. We don't offer simulations; we offer <strong>live projects</strong>. Work alongside our senior team (Dhaval, Himani, Nikesh, Chintan, Riya) on production-ready solutions, gaining expertise in modern stacks like <strong>Laravel, MERN, and Multi-Tech Solutions</strong>.
                        </p>
                        <ul className="list-unstyled small mt-3">
                            <li className="mb-2 text-ignite-light"><i className="bi bi-check-circle-fill text-ignite-red me-2"></i> <strong>Virtual & Flexible:</strong> Work from anywhere, anytime. Perfect for students and professionals.</li>
                            <li className="mb-2 text-ignite-light"><i className="bi bi-check-circle-fill text-ignite-red me-2"></i> <strong>Live Projects:</strong> Deploy code used by real clients/users.</li>
                            <li className="mb-2 text-ignite-light"><i className="bi bi-check-circle-fill text-ignite-red me-2"></i> <strong>Mentorship:</strong> Direct guidance from our Spark-Starters via virtual meetings.</li>
                            <li className="mb-2 text-ignite-light"><i className="bi bi-check-circle-fill text-ignite-red me-2"></i> <strong>Diverse Tech:</strong> Master Laravel, MERN, and Multi-Tech integration.</li>
                            <li className="mb-2 text-ignite-light"><i className="bi bi-check-circle-fill text-ignite-red me-2"></i> <strong>Certificate:</strong> Receive a certificate upon successful completion.</li>
                        </ul>
                        <div className="text-center">
                            <Button className="btn-ignite-primary mt-4 btn-lg" href="#contact">Apply for Virtual Internship Today</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
);

export default InternshipSection;