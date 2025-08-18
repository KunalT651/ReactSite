import React, { useState } from 'react';

const formContainerStyle = {
  background: '#fff',
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
};

const formTitleStyle = {
  color: '#222',
  fontSize: '1.5rem',
  marginBottom: '1.5rem',
  fontWeight: 600,
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '1rem',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  fontFamily: 'inherit',
};

const labelStyle = {
  display: 'block',
  marginBottom: '0.5rem',
  color: '#333',
  fontWeight: 500,
};

const fieldStyle = {
  marginBottom: '1.5rem',
};

const buttonStyle = {
  width: '100%',
  padding: '0.875rem',
  borderRadius: '8px',
  border: 'none',
  background: '#1976d2',
  color: '#fff',
  fontSize: '1rem',
  cursor: 'pointer',
  fontWeight: 500,
  transition: 'background 0.2s, transform 0.1s',
};

const successStyle = {
  background: '#e8f5e8',
  color: '#2e7d32',
  padding: '1rem',
  borderRadius: '8px',
  marginTop: '1rem',
  textAlign: 'center',
  border: '1px solid #c8e6c9',
};

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = '#1976d2';
    e.target.style.boxShadow = '0 0 0 2px rgba(25, 118, 210, 0.1)';
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = '#ddd';
    e.target.style.boxShadow = 'none';
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={formTitleStyle}>Send Me a Message</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={fieldStyle}>
          <label style={labelStyle}>Name *</label>
          <input 
            name="name" 
            value={form.name} 
            onChange={handleChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Your full name" 
            required 
            style={inputStyle}
            disabled={isSubmitting}
          />
        </div>
        
        <div style={fieldStyle}>
          <label style={labelStyle}>Email *</label>
          <input 
            name="email" 
            type="email" 
            value={form.email} 
            onChange={handleChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="your.email@example.com" 
            required 
            style={inputStyle}
            disabled={isSubmitting}
          />
        </div>
        
        <div style={fieldStyle}>
          <label style={labelStyle}>Message *</label>
          <textarea 
            name="message" 
            value={form.message} 
            onChange={handleChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Tell me about your project or just say hello.." 
            required 
            rows="5"
            style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
            disabled={isSubmitting}
          />
        </div>
        
        <button 
          type="submit" 
          style={{
            ...buttonStyle,
            background: isSubmitting ? '#ccc' : '#1976d2',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
          }}
          disabled={isSubmitting}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.target.style.background = '#125ea2';
              e.target.style.transform = 'translateY(-1px)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) {
              e.target.style.background = '#1976d2';
              e.target.style.transform = 'translateY(0)';
            }
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      
      {submitted && (
        <div style={successStyle}>
          <strong>Thank you!</strong> Your message has been sent successfully. I'll get back to you soon.
        </div>
      )}
    </div>
  );
};

export default ContactForm;
