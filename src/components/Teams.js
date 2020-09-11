import React from 'react';
import  { Link } from 'react-router-dom';

function Teams(props) {
    return(
        <>
           <li className='teams'>
               <Link className='teams_link' to={props.path}>
                   <figure className='teams_pic-wrap' data-category={props.label}>
                       <img src={props.src} alt='Team Image'
                       className='teams_img'/>
                   </figure>
                   <div className='teams_info'>
                       <h5 className='teams_text'>{props.text}</h5>                   
                    </div>
                </Link>
           </li>
        </>
    );
}

export default Teams;