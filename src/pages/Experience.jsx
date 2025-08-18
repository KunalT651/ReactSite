import React, { useEffect, useState } from 'react';
import { fetchExperiences } from '../api/api';
import ExperienceCard from '../components/ExperienceCard';

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

const loadingStyle = {
  textAlign: 'center',
  padding: '3rem',
  fontSize: '1.1rem',
  color: '#666',
};

const errorStyle = {
  textAlign: 'center',
  padding: '3rem',
  color: '#d32f2f',
  fontSize: '1.1rem',
  background: '#ffebee',
  borderRadius: '8px',
  border: '1px solid #ffcdd2',
};

const noDataStyle = {
  textAlign: 'center',
  padding: '3rem',
  color: '#666',
  fontSize: '1.1rem',
  background: '#f9f9f9',
  borderRadius: '8px',
  border: '1px solid #e0e0e0',
};

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadExperiences = async () => {
      try {
        const data = await fetchExperiences();
        setExperiences(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadExperiences();
  }, []);

  if (loading) {
    return (
      <div style={containerStyle}>
        <div style={loadingStyle}>
          <div>Loading experience data...</div>
          <div style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            Please wait while we fetch the latest information.
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={containerStyle}>
        <div style={errorStyle}>
          <div><strong>Error loading experience data</strong></div>
          <div style={{ marginTop: '0.5rem' }}>{error}</div>
          <div style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            Please try refreshing the page or contact support if the issue persists.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Professional Experience</h1>
      <p style={subtitleStyle}>
        Here's a comprehensive overview of my professional journey, including roles, 
        responsibilities, and achievements that have shaped my career as a developer.
      </p>
      
      {experiences.length === 0 ? (
        <div style={noDataStyle}>
          <div><strong>No experience data available</strong></div>
          <div style={{ marginTop: '0.5rem' }}>
            Experience information will be displayed here once it's added to the system.
          </div>
        </div>
      ) : (
        <div>
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp._id || index} {...exp} />
          ))}
          
          <div style={{ 
            textAlign: 'center', 
            marginTop: '3rem', 
            padding: '2rem',
            background: '#f8f9fa',
            borderRadius: '8px',
            color: '#666'
          }}>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              Interested in learning more about my experience? 
              Feel free to <a href="/contact" style={{ color: '#1976d2', textDecoration: 'none' }}>
                reach out
              </a> for a detailed discussion.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
