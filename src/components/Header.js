import React from "react";
import Icon from "./images/TD Icon Smaller.png";
import NavBar from "./NavBar";

function Header({ currentPage, handlePageChange }) {
    return (
        <div className="flex flex-col items-center flex-wrap bg-accent-focus">
            <img
                className="justify-left h-18 w-18 mt-1 mr-4"
                src={Icon}
                alt="The Initials T and D"
            />

            <h1 className="text-2xl font-bold mb-15">
                Tamara "T" Dusenbury
            </h1>
            <NavBar
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
        </div>
    );
}

export default Header;
