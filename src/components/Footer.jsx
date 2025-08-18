import React from 'react';

const Footer = () => (
  <footer style={{ padding: '1rem', background: '#f5f5f5', color: '#222', textAlign: 'center', marginTop: '2rem', fontSize: '0.95rem', borderTop: '1px solid #eee' }}>
    &copy; {new Date().getFullYear()} Kunal Thakare. All rights reserved.
  </footer>
);

export default Footer;
