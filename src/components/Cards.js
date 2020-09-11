import React from 'react'
import Teams from './Teams'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Our Teams</h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <Teams 
                        src='images/Nevronas.jpg'
                        text='Nevronas'
                        label='Nevronas'
                        path='/nevronas'
                        />
                        <Teams 
                        src='images/Spardhak.jpg'
                        text='Spardhak'
                        label='Spardhak'
                        path='/spardhak'
                        />
                    </ul>
                    <ul className='cards_items'>
                        <Teams 
                        src='images/CybSec.jpg'
                        text='CybSec'
                        label='CybSec'
                        path='/cybsec'
                        />
                        <Teams 
                        src='images/GBit.jpg'
                        text='GBit'
                        label='GBit'
                        path='/gbit'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
