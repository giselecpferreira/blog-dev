import React from "react"
import { Link } from "gatsby"
import {
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa"


const SocialLinks = ({ contacts }) => {
    return (
        <div className="social-links float-right mr-4">
             <Link to="/"><span className="text-light d-block py-1 pr-2">Home</span></Link>
             <Link to="/about"><span className="nav-bar text-light d-block py-1 px-3">About</span></Link>
             <Link to="/archive"><span className="text-light d-block py-1 pl-2">Archive</span></Link>
            <a className="text-primary ml-4"
                href={contacts.linkedin} target="_blank">
                <span title="Linkedin" >
                    <FaLinkedinIn size={28} style={{ color: "primary" }} />
                </span>
            </a>
            <a className="text-light ml-4"
                href={contacts.github} target="_blank">
                <span title="GitHub">
                    <FaGithub size={28} style={{ color: "light" }} />
                </span>
            </a>
        </div>
    )
}

export default SocialLinks