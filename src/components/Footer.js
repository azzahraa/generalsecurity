import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import lg from "./img/lg.png"
function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Vérifiez nos produits
        </p>
        <p className='footer-subscription-text'>
         vous pouvez contactez notre SAV
        </p>
        
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Nos Metiers</h2>
            <Link to='/sign-up'>Vidéo-surveillance</Link>
            <Link to='/'>Controle d'accés</Link>
            <Link to='/'>Alarme anti-intrusion</Link>
            <Link to='/'>Sécurité incendie</Link>
            <Link to='/'>Disposition d'inspection</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Nos Solutions</h2>
            <Link to='/'>Banques</Link>
            <Link to='/'>Ports et aéropots</Link>
            <Link to='/'>Bureaux et administrations</Link>
            <Link to='/'>Hotels et restaurants</Link>
            <Link to='/'>Santé</Link>
            <Link to='/'>Télécommunication</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>Lun-Ven 08:00-18:00 , Sam-08:00-13:00</Link>
            <Link to='/'>GP1, route de Tunis au dessus d’Attijari Bank – 4011 Hammam Sousse – Tunisie</Link>
            <Link to='/'>+216 73 324 920</Link>
            <Link to='/'>assistante@gstunisia.com</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Réseaux sociaux</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <img src={lg} alt="logo" className="navbar-logo"></img>
          </div>
          <small class='website-rights'>General Security © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
