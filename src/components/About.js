import React from 'react';
import './About.css';

function About() {
    return (
        <div className='about'>
            <h1>About Us</h1>
            <div className='about_container'>
                <p>Innovation Garage is a 24x7 student-run multidisciplinary
                    work space for innovation at NIT Warangal. Founded in the
                    year 2015, it aims to provide the college a space equipped
                    with all kinds of tools required to turn imagination into
                    reality.
                </p>
                <p>
                    Apart from being an open space, another way in which Innovation
                    Garage adds to NIT Warangal's culture is by organising 
                    various events like Hackathons, Makeathons, CTF's, workshops and 
                    many more. CUSMAT, a Virtual Reality solutions provider, and 
                    Epick Bikes, a start-up specialising in ebikes, are just some of 
                    the start-ups that we have incubated. As many as 70 prototypes 
                    that have come out of Innovation Garage. We have conducted six 
                    workshops for over 620 students this academic year.
                </p>
            </div>
        </div>
    );       
}

export default About;
