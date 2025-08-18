import React from 'react';

const sectionStyle = {
  background: '#fff',
  borderRadius: '12px',
  padding: '2rem',
  margin: '2rem 0',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
};

const titleStyle = {
  color: '#222',
  fontSize: '1.8rem',
  marginBottom: '1.5rem',
  textAlign: 'center',
  fontWeight: 600,
};

const categoryStyle = {
  marginBottom: '1.5rem',
};

const categoryTitleStyle = {
  color: '#1976d2',
  fontSize: '1.2rem',
  marginBottom: '0.8rem',
  fontWeight: 500,
  borderBottom: '2px solid #1976d2',
  paddingBottom: '0.3rem',
  display: 'inline-block',
};

const skillsListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.8rem',
  margin: 0,
  padding: 0,
  listStyle: 'none',
};

const skillItemStyle = {
  background: '#f0f7ff',
  color: '#1976d2',
  padding: '0.5rem 1rem',
  borderRadius: '20px',
  fontSize: '0.9rem',
  border: '1px solid #e3f2fd',
  fontWeight: 500,
  transition: 'all 0.2s',
};

const SkillsSection = ({ skills }) => {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  const categories = Object.keys(groupedSkills).sort();

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>Skills & Technologies</h2>
      {categories.map(category => (
        <div key={category} style={categoryStyle}>
          <h3 style={categoryTitleStyle}>{category}</h3>
          <ul style={skillsListStyle}>
            {groupedSkills[category].map((skill, index) => (
              <li 
                key={index} 
                style={skillItemStyle}
                onMouseEnter={(e) => {
                  e.target.style.background = '#1976d2';
                  e.target.style.color = '#fff';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#f0f7ff';
                  e.target.style.color = '#1976d2';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
