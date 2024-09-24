import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; {new Date().getFullYear()} Kharidlo Co. All rights reserved.</p>
        <ul style={styles.footerLinks}>
          <li><a href="/privacy" style={styles.footerLink}>Privacy Policy</a></li>
          <li><a href="/terms" style={styles.footerLink}>Terms of Service</a></li>
          <li><a href="/contact" style={styles.footerLink}>Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
    position: 'relative',
    bottom: '0',
    width: '100%',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  footerLinks: {
    listStyleType: 'none',
    padding: 0,
    margin: '10px 0 0',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  footerLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px',
  },
};

export default Footer;
