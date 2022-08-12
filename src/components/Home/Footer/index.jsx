import React from 'react';
import './styles.css';

const Footer = () => (
  <footer>
    <div className='footer-left'>
      <p>Pixabay</p>
      <p>React api</p>
    </div>
    <div className='footer-right'>
      <p>Meet us:</p>
      <p>
        <span><a href="https://www.instagram.com/ankit__mandli/" target={"_blank"}><i className="bi bi-instagram"></i></a></span>
        
        <span><a href="https://www.facebook.com/ankit.mandli" target={"_blank"}><i className="bi bi-facebook"></i></a></span>
      </p>
    </div>
  </footer>
);

export default Footer;
