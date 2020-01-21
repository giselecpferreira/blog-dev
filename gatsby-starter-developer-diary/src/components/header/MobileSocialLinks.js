import React from "react";
import { Link } from "gatsby"
import {
    FaLinkedinIn,
    FaGithub
} from "react-icons/fa"

import "../layout.css"

const MobileSocialLinks = ({ contacts }) => {
    return (
        <div className="bottom-bar py-1">
                            <Link to="/"><span className="text-light d-block pr-1">Home</span></Link>
                            <Link to="/about"><span className="nav-bar text-light d-block pl-1 pr-1">About</span></Link>
                            <Link to="/archive"><span className="text-light d-block pl-1">Archive</span></Link>
            <a className=" text-primary"
                href={contacts.linkedin}>
                <span title="Linked In">
                    <FaLinkedinIn size={26} style={{ color: "primary" }} />
                </span>
            </a>
            <a className="text-light"
                href={contacts.github}>
                <span title="GitHub">
                    <FaGithub size={26} style={{ color: "light" }} />
                </span>
            </a>
        </div>
    )
}

export default MobileSocialLinks;