import React from 'react';
import '../../App.css';
import './People.css';
import  { Link } from 'react-router-dom';

function People_cards(props) {
    return(
        <>
           <li className='people1'>
               <Link className='people_link' to={props.path}>
                   <figure className='people_pic-wrap' data-category={props.label}>
                       <img src={props.src} alt='People Image'
                       className='people_img'/>
                   </figure>
                   <div className='people_info'>
                       <h5 className='people_text'>{props.name}</h5>
                       <h5 className='people_text'>{props.position}</h5>                   
                   </div>
                </Link>
           </li>
        </>
    );
}

function People() {
    return (
        <div className='people-all'>
            <div className='people-pic'>
            </div>
            <div className='people'>
                <h1>Meet the IG family</h1>           
                <div className='people_container'>
                    <div className='people_wrapper'>
                        <ul className='people_items'>
                            <People_cards 
                            src='images/avatar.png'
                            name='Name'
                            position='Year and Position'
                            path='/'
                            />
                            <People_cards 
                            src='images/avatar.png'
                            name='Name'
                            position='Year and Position'
                            path='/'
                            />
                            <People_cards
                            src='images/avatar.png'
                            name='Name'
                            position='Year and Position'
                            path='/'
                            />
                            <People_cards
                            src='images/avatar.png'
                            name='Name'
                            position='Year and Position'
                            path='/'
                            />
                        </ul>
                        <ul className='people_items'>
                            <People_cards 
                            src='images/avatar.png'
                            name='Name'
                            position='Year and Position'
                            path='/'
                            />
                            <People_cards 
                            src='images/avatar.png'
                            name='Name'
                            position='Year and Position'
                            path='/'
                            />
                            <People_cards
                            src='images/avatar.png'
                            name='Name'
                            position='Year and Position'
                            path='/'
                            />
                            <People_cards
                            src='images/avatar.png'
                            name='Name'
                            position='Year and Position'
                            path='/'
                            />
                        </ul>
                        <ul className='people_items'>
                            <People_cards 
                            src='images/avatar.png'
                            name='Name'
                            position='Year and Position'
                            path='/'
                            />
                            <People_cards 
                            src='images/avatar.png'
                            name='Name'
                            position='Year and Position'
                            path='/'
                            />
                            <People_cards
                            src='images/avatar.png'
                            name='Name'
                            position='Year and Position'
                            path='/'
                            />
                            <People_cards
                            src='images/avatar.png'
                            name='Name'
                            position='Year and Position'
                            path='/'
                            />
                        </ul>
                        <ul className='people_items'>
                            <People_cards 
                            src='images/avatar.png'
                            name='Name'
                            position='Year and Position'
                            path='/'
                            />
                            <People_cards 
                            src='images/avatar.png'
                            name='Name'
                            position='Year and Position'
                            path='/'
                            />
                            <People_cards
                            src='images/avatar.png'
                            name='Name'
                            position='Year and Position'
                            path='/'
                            />
                            <People_cards
                            src='images/avatar.png'
                            name='Name'
                            position='Year and Position'
                            path='/'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default People;