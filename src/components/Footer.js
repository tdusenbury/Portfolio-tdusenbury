import React from 'react';

function Footer({ currentPage, handlePageChange }) {
    return (

        <footer className="footer p-10 bg-primary text-neutral-content text-primary-content">
            <div>
                    <p className="text-bold text-xl">
                    Tamara "T" Dusenbury<br/>
                    </p> 
                    <p>tamara.dusenbury@gmail.com</p>
                    <p>510.363.2909</p>

                <a className="link link-primary font-bold" href="https://linkedin.com/in/tamara-dusenbury-02ab8591/"><img src="https://skillicons.dev/icons?i=linkedin"
                 alt="linkedIn Profile" /></a> 

                <a className="link link-primary font-bold" href="https://github.com/tdusenbury/"><img src="https://skillicons.dev/icons?i=github"
                 alt="GitHub Profile" /></a> 


            </div>
  
</footer>
    )
}

export default Footer;