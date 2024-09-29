import React from 'react';

const styles = {
  footer: {
    backgroundColor: '#f8f9fa', // Light background color
    color: '#6c757d', // Muted text color
    textAlign: 'center', // Center the text horizontally
    padding: '1rem', // Add padding for spacing
    //position: 'fixed', // Fixed position at the bottom
    bottom: '0', // Align to the bottom
    width: '100%', // Full width of the viewport
    borderTop: '1px solid #e9ecef', // Subtle border on top
    zIndex: 1000, // Ensure it stays above other content
  },
};

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2024 Dairy Sync. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
