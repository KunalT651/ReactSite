import React, { useEffect, useState } from 'react';
import { fetchExperiences, fetchSkills } from '../api/api';
import ExperienceCard from '../components/ExperienceCard';
import SkillsSection from '../components/SkillsSection';

const heroStyle = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: '#fff',
  padding: '4rem 2rem',
  textAlign: 'center',
  marginBottom: '3rem',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
};

const sectionStyle = {
  marginBottom: '3rem',
};

const sectionTitleStyle = {
  color: '#222',
  fontSize: '2.2rem',
  textAlign: 'center',
  marginBottom: '2rem',
  fontWeight: 600,
};

const loadingStyle = {
  textAlign: 'center',
  padding: '2rem',
  fontSize: '1.1rem',
  color: '#666',
};

const errorStyle = {
  textAlign: 'center',
  padding: '2rem',
  color: '#d32f2f',
  fontSize: '1.1rem',
};

const Home = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [experiencesData, skillsData] = await Promise.all([
          fetchExperiences(),
          fetchSkills()
        ]);
        setExperiences(experiencesData.slice(0, 3)); // Show only first 3 experiences on home page
        setSkills(skillsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div style={loadingStyle}>Loading portfolio data...</div>;
  }

  if (error) {
    return <div style={errorStyle}>Error loading data: {error}</div>;
  }

  return (
    <div>
      {/* Hero Section */}
      <div style={heroStyle}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 700 }}>Kunal Thakare</h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 400, opacity: 0.9 }}>Full Stack Developer</h2>
        <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6', opacity: 0.9 }}>
          Welcome to my portfolio! I am passionate about building modern, scalable web applications 
          and always eager to learn new technologies. Explore my experience and skills below.
        </p>
      </div>

      <div style={containerStyle}>
        {/* Recent Experience Section */}
        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Recent Experience</h2>
          {experiences.length > 0 ? (
            experiences.map((exp, index) => (
              <ExperienceCard key={exp._id || index} {...exp} />
            ))
          ) : (
            <p style={{ textAlign: 'center', color: '#666' }}>No experience data available.</p>
          )}
        </div>

        {/* Skills Section */}
        {skills.length > 0 && (
          <div style={sectionStyle}>
            <SkillsSection skills={skills} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
