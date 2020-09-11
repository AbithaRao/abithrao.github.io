import React from 'react';
import '../../App.css';
import './Events.css';

function Events() {
    return (
        <div>
            <h1>Upcoming Events</h1>
            <div className='Event-each1'>
                <h1>1. Cyber Security Webinar</h1>
                <div className='desc1'>
                    <img src='images/cybweb.jpg' 
                    className='event-img1'/>
                    <p>
                    Hacking Hacking Hacking !!<br />
                    A Pretty interesting and fascinating term....
                    ....but what is hacking actually?<br />
                    Can you Hack an Instagram or Facebook 
                    account for me ??<br />
                    A very common question a hacker comes across
                     in his/her daily life!<br />
                    A Hacker can be a Black or White hat, 
                    but a Cybersecurity Expert is way more Different !!<br />
                    Wouldn't it be interesting if you could 
                    earn a living by Hacking?
                    If you think Cybersecurity, Hacking and the 
                    likes are destined to be your future, this 
                    webinar is just for you!<br />
                    Team CybSec is here with a webinar on 
                    'Cybersecurity - Career and Scope' by Mr 
                    Deep Patidar, CEH certified and working in 
                    the Ministry of Justice, Kuwait.<br />
                    Date- 12th September 2020<br />
                    Time- 5 pm<br />
                    Venue- Live on youtube at CybSec NITW<br />
                    Register for the Webinar Here 
                    - http://webinar.cybsec.in/<br /> </p>
                </div>
            </div>
            <div className='Event-each2'>
                <h1>2. Eduthon</h1>    
                <div className='desc2'>
                    <img src='images/Eduthon.jpg' 
                    className='event-img2'/>
                    <p>
                    “For the first time in the history<br />
                    Syllabus by Students, for Students.”<br />
                    Edutribe presents to you
                    EDUTHON - An Educational Ideathon for Mechanical, 
                    Electronics and Electrical Engineering students 
                    where they can present their ideas having the 
                    potential to be taught in an Augmented Reality 
                    Platform.<br />
                    Only Mechanical Engineering, Electrical 
                    Engineering students of 2nd, 3rd,4th year of 
                    BE or B.tech and 1st and 2nd year Masters students 
                    can participate in the Ideathon.<br />
                    You can find more information about the 
                    Ideathon-<br />
                    Website link: https://edutribe.in/student-campaign/<br />
                    Use the following link to join the Whatsapp group:<br />
                    https://eduthon.edutribe.in/JoinWhatsappNITW<br />
                    Key Dates:-<br />
                    Registration Starts:- 5th September 2020.<br />
                    Registration Ends:- 15th September 2020.<br />
                    Webinar for Students:- Sometime between 15th-17th 
                    September 2020.<br />
                    Idea Submission Deadline:- 15th October 2020.<br />
                    Announcement of 1st round:- 30th October 2020.<br /> </p>
                </div>
            </div>
            <h1 className='end'>That's all for now!</h1>
        </div>
    );
}

export default Events;