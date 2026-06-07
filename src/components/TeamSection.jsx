"use client";

import { Container, Row, Col } from "react-bootstrap";

const teamMembers = [
  {
    name: "Nikesh Jain",
    role: "Multi-Tech Specialist",
    expertise: "Intelligent Combustion",
    img: "/images/nikesh.jpg",
  },
  {
    name: "Chintan Parmar",
    role: "Graphics Designer with AI",
    expertise: "The Visual Spark",
    img: "/images/chintan.jpg",
  },
];

const TeamSection = () => (
  <section
    id="team"
    className="py-5 py-lg-5"
    style={{
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      position: "relative",
    }}
  >
    <Container>
      <div className="text-center mb-5 fade-in-up">
        <h2
          className="display-4 fw-bold mb-3 text-dark"
          style={{ letterSpacing: "-0.02em" }}
        >
          The CodeIgnity <span className="text-ignite-red">Spark</span>-Starters
        </h2>
        <p
          className="lead text-dark"
          style={{ fontSize: "1.1rem", opacity: 0.8 }}
        >
          The core team driving fast, effective solutions.
        </p>
      </div>

      <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 justify-content-center">
        {teamMembers.map((member, index) => (
          <Col
            key={index}
            className="text-center fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="team-avatar-wrapper">
              <img src={member.img} alt={member.name} className="team-avatar" />
            </div>
            <h5
              className="fw-bold mt-3 mb-2"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "1.1rem",
              }}
            >
              {member.name}
            </h5>
            <p
              className="text-dark small mb-1 fw-medium"
              style={{ opacity: 0.7 }}
            >
              {member.role}
            </p>
            <p
              className="text-dark small"
              style={{ fontSize: "0.85rem", opacity: 0.6 }}
            >
              {member.expertise}
            </p>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default TeamSection;
