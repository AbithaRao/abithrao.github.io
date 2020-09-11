import React from 'react'
import { Button } from './Button'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-sub-heading'>
                    Like what we do? Want to know more? Write to us.
                </p>
                <p className='footer-sub-text'>
                    ig-nitw@student.nitw.ac.in
                </p>
                <p className='footer-sub-heading'>
                    Or come meet us at:
                </p>
                <p className='footer-sub-text'>  
                    Level-2, Center for Innovation and Development,
                </p>
                <p className='footer-sub-text'>
                    NITW Warangal, Telangana, India 
                </p>
            </section>
            <div>
                
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Sponsorships</Link>
                        <Link to='/'>Collaborations</Link>
                        <Link to='/'>Support</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>LinkedIn</Link>
                        <Link to='/'>Youtube</Link>
                    </div>
                </div>
            </div>
            <section class='Social-media'>
                <div class='social-media-wrap'>
                    <div className='social-icons'>
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
                         class='social-icon-link linkedin'
                         to='/'
                         target='_blank'
                         aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                        <Link
                         class='social-icon-link youtube'
                         to='/'
                         target='_blank'
                         aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
