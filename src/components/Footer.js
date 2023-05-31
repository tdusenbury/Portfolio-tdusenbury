import React from 'react';

function Footer({ currentPage, handlePageChange }) {
    return (

        <footer className="footer footer-center p-10 bg-primary text-neutral-content text-primary-content">
            <div>
            {/* <span class="footer-title">Contact Me Here:</span> */}
                    <p className="text-bold text-xl">
                    Tamara "T" Dusenbury<br/>
                    </p> 
                    <p>tamara.dusenbury@gmail.com</p>
                    <p>510.363.2909</p>
               <div class="grid grid-flow-col gap-4">
                <a className="link link-primary font-bold" href="https://linkedin.com/in/tamara-dusenbury-02ab8591/"><img src="https://skillicons.dev/icons?i=linkedin"
                 alt="linkedIn Profile" /></a> 

                <a className="link link-primary font-bold" href="https://github.com/tdusenbury/"><img src="https://skillicons.dev/icons?i=github"
                 alt="GitHub Profile" /></a> 

                <a className="link link-primary font-bold" href="https://stackoverflow.com/users/21989917/tamara-dusenbury"><img src="https://skillicons.dev/icons?i=stackoverflow"
                 alt="Stack Overflow Profile" /></a> 

                </div>
                <p className="font-bold italic ">"It is good to have an end to journey towards; but it is the journey that matters, in the end."
            <br/>
            --Ursula K Le Guin</p>
            </div>
  
</footer>
    )
}

export default Footer;