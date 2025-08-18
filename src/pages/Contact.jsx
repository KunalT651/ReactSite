import React from 'react';
import ContactForm from '../components/ContactForm';
import { contactInfo } from '../api/api';

const containerStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '2rem',
};

const titleStyle = {
  color: '#222',
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: '1rem',
  fontWeight: 600,
};

const subtitleStyle = {
  color: '#666',
  fontSize: '1.1rem',
  textAlign: 'center',
  marginBottom: '3rem',
  lineHeight: '1.6',
};

const contentStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '3rem',
  '@media (maxWidth: 768px)': {
    gridTemplateColumns: '1fr',
  }
};

const infoSectionStyle = {
  background: '#fff',
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
};

const infoTitleStyle = {
  color: '#222',
  fontSize: '1.5rem',
  marginBottom: '1.5rem',
  fontWeight: 600,
};

const infoItemStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
  color: '#444',
};

const iconStyle = {
  width: '20px',
  height: '20px',
  marginRight: '12px',
  color: '#1976d2',
};

const linkStyle = {
  color: '#1976d2',
  textDecoration: 'none',
  fontWeight: 500,
};

const Contact = () => (
  <div style={containerStyle}>
    <h1 style={titleStyle}>Get In Touch</h1>
    <p style={subtitleStyle}>
      I'd love to hear from you! Whether you have a project in mind, want to collaborate, 
      or just want to say hello, feel free to reach out using any of the methods below.
    </p>
    
    <div style={contentStyle}>
      {/* Contact Information */}
      <div style={infoSectionStyle}>
        <h2 style={infoTitleStyle}>Contact Information</h2>
        
        <div style={infoItemStyle}>
          <span style={iconStyle}>Email:</span>
          <div>
            <strong>Email</strong>
            <br />
            <a href={`mailto:${contactInfo.email}`} style={linkStyle}>
              {contactInfo.email}
            </a>
          </div>
        </div>
        
        <div style={infoItemStyle}>
          <span style={iconStyle}>Phone:</span>
          <div>
            <strong>Phone</strong>
            <br />
            <a href={`tel:${contactInfo.phone}`} style={linkStyle}>
              {contactInfo.phone}
            </a>
          </div>
        </div>
        
        <div style={infoItemStyle}>
          <span style={iconStyle}>LinkedIn:</span>
          <div>
            <strong>LinkedIn</strong>
            <br />
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Professional Profile
            </a>
          </div>
        </div>
        
        <div style={infoItemStyle}>
          <span style={iconStyle}>GitHub:</span>
          <div>
            <strong>GitHub</strong>
            <br />
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              View Code Portfolio
            </a>
          </div>
        </div>
        
        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          background: '#f8f9fa', 
          borderRadius: '8px',
          fontSize: '0.95rem',
          color: '#666'
        }}>
          <strong style={{ color: '#222' }}>Response Time:</strong>
          <br />
          I typically respond to messages within 24 hours during business days.
        </div>
      </div>
      
      {/* Contact Form */}
      <div>
        <ContactForm />
      </div>
    </div>
  </div>
);

export default Contact;
