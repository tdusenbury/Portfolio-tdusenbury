import React from "react";

function NavBar({ currentPage, handlePageChange }) {
    return (
        <div>
            <ul className="flex flex-col md:flex-row items-center md:my-5">
                <li className="nav-item">
                    <a
                        href="#about"
                        onClick={() => handlePageChange("About")}
                        className={
                            currentPage === "About"
                                ? "btn btn-outline"
                                : "btn btn-ghost"
                        }
                    >
                        About Me
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#portfolio"
                        onClick={() => handlePageChange("Portfolio")}
                        className={
                            currentPage === "Portfolio"
                                ? "btn btn-outline"
                                : "btn btn-ghost"
                        }
                    >
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        onClick={() => handlePageChange("Contact")}
                        className={
                            currentPage === "Contact"
                                ? "btn btn-outline"
                                : "btn btn-ghost"
                        }
                    >
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange("Resume")}
                        className={
                            currentPage === "Resume"
                                ? "btn btn-outline"
                                : "btn btn-ghost"
                        }
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
