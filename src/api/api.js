// Backend API base URL
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

// Fetch experiences from the backend API
export async function fetchExperiences() {
  try {
    console.log('Fetching experiences from:', `${BASE_URL}/experiences`);
    const res = await fetch(`${BASE_URL}/experiences`);
    if (!res.ok) {
      throw new Error(`Failed to fetch experiences: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    console.log('Successfully fetched experiences:', data.length, 'records');
    return data;
  } catch (error) {
    console.error('Error fetching experiences:', error);
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Cannot connect to backend API. Make sure the server is running on http://localhost:4000');
    }
    throw error;
  }
}

// Fetch skills from the backend API
export async function fetchSkills() {
  try {
    console.log('Fetching skills from:', `${BASE_URL}/skills`);
    const res = await fetch(`${BASE_URL}/skills`);
    if (!res.ok) {
      throw new Error(`Failed to fetch skills: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    console.log('Successfully fetched skills:', data.length, 'records');
    return data;
  } catch (error) {
    console.error('Error fetching skills:', error);
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Cannot connect to backend API. Make sure the server is running on http://localhost:4000');
    }
    throw error;
  }
}

// Contact information (hardcoded for now)
export const contactInfo = {
  email: 'kunal.thakare@example.com',
  phone: '+1 (555) 123-4567',
  linkedin: 'https://www.linkedin.com/in/kunalthakare',
  github: 'https://github.com/kunalthakare'
};
