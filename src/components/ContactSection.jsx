'use client';

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
            
            // Reset status message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-5 py-lg-5" style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Pattern */}
            <div className="position-absolute w-100 h-100" style={{
                background: 'radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(0, 242, 254, 0.1) 0%, transparent 50%)',
                zIndex: 0
            }}></div>

            <Container className="position-relative" style={{ zIndex: 1 }}>
                <div className="text-center mb-5 fade-in-up">
                    <h2 className="display-4 fw-bold mb-3 text-white" style={{ letterSpacing: '-0.02em' }}>
                        Get In <span style={{
                            background: 'linear-gradient(135deg, #00f2fe 0%, #ffffff 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>Touch</span>
                    </h2>
                    <p className="lead text-white" style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
                        Have a project in mind? Let's discuss how we can help bring your vision to life.
                    </p>
                </div>

                <Row className="justify-content-center">
                    <Col lg={8} xl={7}>
                        <Card className="border-0 shadow-lg" style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            borderRadius: '20px',
                            overflow: 'hidden'
                        }}>
                            <Card.Body className="p-4 p-lg-5">
                                {submitStatus === 'success' && (
                                    <div className="alert alert-success d-flex align-items-center mb-4" role="alert" style={{
                                        borderRadius: '12px',
                                        border: 'none',
                                        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                        color: 'white'
                                    }}>
                                        <i className="bi bi-check-circle-fill me-2 fs-5"></i>
                                        <div>Thank you! Your message has been sent successfully. We'll get back to you soon.</div>
                                    </div>
                                )}

                                <Form onSubmit={handleSubmit}>
                                    <Row className="g-3">
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="fw-semibold text-dark mb-2">
                                                    Full Name <span className="text-danger">*</span>
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="John Doe"
                                                    style={{
                                                        borderRadius: '12px',
                                                        border: '2px solid #e0e0e0',
                                                        padding: '12px 16px',
                                                        fontSize: '1rem',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onFocus={(e) => {
                                                        e.target.style.borderColor = '#667eea';
                                                        e.target.style.boxShadow = '0 0 0 0.2rem rgba(102, 126, 234, 0.15)';
                                                    }}
                                                    onBlur={(e) => {
                                                        e.target.style.borderColor = '#e0e0e0';
                                                        e.target.style.boxShadow = 'none';
                                                    }}
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="fw-semibold text-dark mb-2">
                                                    Email Address <span className="text-danger">*</span>
                                                </Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="john@example.com"
                                                    style={{
                                                        borderRadius: '12px',
                                                        border: '2px solid #e0e0e0',
                                                        padding: '12px 16px',
                                                        fontSize: '1rem',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onFocus={(e) => {
                                                        e.target.style.borderColor = '#667eea';
                                                        e.target.style.boxShadow = '0 0 0 0.2rem rgba(102, 126, 234, 0.15)';
                                                    }}
                                                    onBlur={(e) => {
                                                        e.target.style.borderColor = '#e0e0e0';
                                                        e.target.style.boxShadow = 'none';
                                                    }}
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="fw-semibold text-dark mb-2">
                                                    Phone Number
                                                </Form.Label>
                                                <Form.Control
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+1 (234) 567-890"
                                                    style={{
                                                        borderRadius: '12px',
                                                        border: '2px solid #e0e0e0',
                                                        padding: '12px 16px',
                                                        fontSize: '1rem',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onFocus={(e) => {
                                                        e.target.style.borderColor = '#667eea';
                                                        e.target.style.boxShadow = '0 0 0 0.2rem rgba(102, 126, 234, 0.15)';
                                                    }}
                                                    onBlur={(e) => {
                                                        e.target.style.borderColor = '#e0e0e0';
                                                        e.target.style.boxShadow = 'none';
                                                    }}
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="fw-semibold text-dark mb-2">
                                                    Subject <span className="text-danger">*</span>
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="Project Inquiry"
                                                    style={{
                                                        borderRadius: '12px',
                                                        border: '2px solid #e0e0e0',
                                                        padding: '12px 16px',
                                                        fontSize: '1rem',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onFocus={(e) => {
                                                        e.target.style.borderColor = '#667eea';
                                                        e.target.style.boxShadow = '0 0 0 0.2rem rgba(102, 126, 234, 0.15)';
                                                    }}
                                                    onBlur={(e) => {
                                                        e.target.style.borderColor = '#e0e0e0';
                                                        e.target.style.boxShadow = 'none';
                                                    }}
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col xs={12}>
                                            <Form.Group className="mb-4">
                                                <Form.Label className="fw-semibold text-dark mb-2">
                                                    Message <span className="text-danger">*</span>
                                                </Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={5}
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="Tell us about your project..."
                                                    style={{
                                                        borderRadius: '12px',
                                                        border: '2px solid #e0e0e0',
                                                        padding: '12px 16px',
                                                        fontSize: '1rem',
                                                        resize: 'vertical',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onFocus={(e) => {
                                                        e.target.style.borderColor = '#667eea';
                                                        e.target.style.boxShadow = '0 0 0 0.2rem rgba(102, 126, 234, 0.15)';
                                                    }}
                                                    onBlur={(e) => {
                                                        e.target.style.borderColor = '#e0e0e0';
                                                        e.target.style.boxShadow = 'none';
                                                    }}
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col xs={12}>
                                            <div className="text-center">
                                                <Button
                                                    type="submit"
                                                    className="btn-ignite-primary btn-lg px-5 py-3 fw-bold"
                                                    disabled={isSubmitting}
                                                    style={{
                                                        minWidth: '200px'
                                                    }}
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                            Sending...
                                                        </>
                                                    ) : (
                                                        <>
                                                            Send Message <i className="bi bi-send-fill ms-2"></i>
                                                        </>
                                                    )}
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactSection;

