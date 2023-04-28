import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Sabian que despues del tema del tetris viene el Dragon Ball Rap??
            </p>
            <p className='footer-subscription-text'>
                Lo dice el Porta
            </p>
            <div className='input-areas'>
                <form>
                    <input type="email" name="email" placeholder='Tu Correo' className='footer-input'/>
                    <Button buttonStyle='btn--outline'>
                        Suscribete</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Sobre Mi</h2>
                    <Link to='/sign-up'>Como Funciona</Link>
                    <Link to='/'>Satanas</Link>
                    <Link to='/'>Carreras</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terminos de Servicio</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contactame</h2>
                    <Link to='/'>Contacto</Link>
                    <Link to='/'>Ayuda</Link>
                    <Link to='/'>Servicio</Link>
                    <Link to='/'>Patrocinio</Link>
                </div>              
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Redes Sociales</h2>                  
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Memes</h2>
                    <Link to='/'>Tiktok</Link>
                    <Link to='/'>Chistes Malos</Link>
                    <Link to='/'>Si lo lees me debes 20 pesotes</Link>
                </div>              
            </div>
        </div>
        <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              MATAME
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>El Farions © 2069</small>
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
  )
}

export default Footer