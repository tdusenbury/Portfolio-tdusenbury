import React from 'react';
import Icon from './images/TD Icon Smaller.png';


function Header() {
    return (
        <div className='bg-accent-focus flex'>
          
            <img className="h-26 w-26" src={Icon} alt="The Initials T and D" height="10" />
            <p className="w-2/3 text-right text-lg pr-4 font-bold italic ">"It is good to have an end to journey towards;<br/> but it is the journey that matters, <br/> in the end."
            <br/>
            --Ursula K Le Guin</p>
        </div>
    )
}

export default Header;