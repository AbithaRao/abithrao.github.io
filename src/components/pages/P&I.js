import React from 'react';
import '../../App.css';
import './P&I.css';

function PI() {
    return (
        <div>
            <h1>Our Initiatives and Collaborations</h1>
            <div className='pai-each1'>
                <h1>IG Report</h1>
                <div className='pdesc1'>
                    <img src='images/ig_rep.jpg' 
                    className='pai-img1'/>
                    <p>
                    Our first detailed report based on the survey 
                    we conducted a couple of days ago has been 
                    published.<br />
                    Find out if higher educational institutions 
                    can survive against the MOOCs.<br />
                    Read the report to learn about disruptive 
                    technology and it's framework.<br />
                    Read the report at:<br />
                    https://bit.ly/IG_REPORT
                    </p>
                </div>
            </div>
            <div className='pai-each2'>
                <h1>AI Guidance Program</h1>
                <div className='pdesc2'>
                    <img src='images/sum_ini.jpg' 
                    className='pai-img2'/>
                    <p>
                    This Quarantine, Nevrónas, in collaboration 
                    with IG, brings you "IG Summer AI Program".<br /> 
                    It's a 5-week-long remote AI guidance program, 
                    structured with various study materials, 
                    assignments and small scale projects to 
                    strengthen your concepts in basic ML.<br />
                    This is also a good opportunity to prove your 
                    worth and get selected into Nevrónas, the ML 
                    research group of NITW.<br />
                    </p>
                </div>
            </div>
            <div className='pai-each1'>
                <h1>Donation Drive</h1>
                <div className='pdesc1'>
                    <img src='images/don_driv.jpg' 
                    className='pai-img1'/>
                    <p>
                    Sometimes the mere words of "Thank You" aren't enough 
                    to express our sense of gratitude. Such is the case here.<br />
                    We have been overwhelmed by the multifarious donations for 
                    the "Donation Drive".<br />
                    Innovation Garage thanks each and every one of the seniors 
                    who contributed to the same and helped us in our mission of 
                    making the college a better one for the upcoming batches. Be 
                    it a book on Fluid Mechanics or an Arduino, we certainly hope 
                    they will go a long way in fuelling the flights of our future 
                    dreamers and innovators.<br />
                    </p>
                </div>
            </div>
            <div className='pai-each2'>
                <h1>Open Hack</h1>
                <div className='pdesc2'>
                    <img src='images/unacad.jpg' 
                    className='pai-img2'/>
                    <p>
                    IG on behalf of unacademy presents<br />
                    OpenHack:<br />
                    Unacademy is India's biggest E-learning platform 
                    that provides high quality content to enable 8M+ 
                    learners.<br />
                    Unacademy is looking for outstanding engineers who 
                    breathe, eat, and dream about coding! Join Unacademy 
                    for a one week journey at their HQ in Bengaluru (travel 
                    and stay included)<br />
                    Eligibility:<br />
                    This is for any 4th year B.E/ B.Tech students, 
                    open to all branches.<br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PI;