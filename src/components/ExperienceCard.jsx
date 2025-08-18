import React from 'react';

const cardStyle = {
  border: '1px solid #e0e0e0',
  borderRadius: '12px',
  padding: '2rem',
  margin: '1.5rem 0',
  background: '#fff',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s, box-shadow 0.2s',
};

const titleStyle = {
  color: '#222',
  fontSize: '1.4rem',
  marginBottom: '0.5rem',
  fontWeight: 600,
};

const companyStyle = {
  color: '#1976d2',
  fontSize: '1.1rem',
  marginBottom: '0.3rem',
  fontWeight: 500,
};

const metaStyle = {
  color: '#666',
  fontSize: '0.9rem',
  marginBottom: '1rem',
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
};

const descriptionStyle = {
  color: '#444',
  lineHeight: '1.6',
};

const ExperienceCard = ({ title, company, location, startDate, endDate, description }) => (
  <div 
    style={cardStyle}
    onMouseEnter={(e) => {
      e.target.style.transform = 'translateY(-2px)';
      e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    }}
  >
    <h3 style={titleStyle}>{title}</h3>
    <div style={companyStyle}>{company}</div>
    <div style={metaStyle}>
      <span><strong>Location:</strong> {location}</span>
      <span><strong>Duration:</strong> {startDate} - {endDate}</span>
    </div>
    {description && description.length > 0 && (
      <div style={descriptionStyle}>
        <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
          {description.map((item, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default ExperienceCard;
