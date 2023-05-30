import React from 'react';
import Icon from '../images/TD Icon Smaller.png';


function Header() {
    return (
        <div className='bg-accent-focus flex'>
            {/* <div className='header_logo'> */}
            <img className="w-1/4" src={Icon} alt="The Initials T and D" height="10" />
            <p className="text-right pr-4">"It is good to have an end to journey towards; but it is the journey that matters, in the end."
            <br/>
            Ursula K Le Guin</p>
        </div>
    )
}

export default Header;