import React from 'react';

const Footer = () => {
    const footerStyle = {
        textAlign: 'center',
        padding: '10px',
    };

    const textStyle = {
        fontSize: '16px',
        color: '#333',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#007bff',
    };

    return (
        <div className='footer' style={footerStyle}>
            <p id='footer-text' style={textStyle}>
                Made with ❤️ By <a href="https://www.linkedin.com/in/g3vind/" style={linkStyle}>Govind Kumar</a>
            </p>
        </div>
    );
};

export default Footer;
