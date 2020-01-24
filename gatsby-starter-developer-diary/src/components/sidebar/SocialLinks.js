import React from "react"
import {
    FaLinkedinIn,
    FaGithub
} from "react-icons/fa"
import "./sidebar.css"


const SocialLinks = ({ contacts }) => {
    return (
        <div className="side-social-links float-left mt-3 mb-3">
            <a className="text-secondary p-2"
                href={contacts.linkedin}>
                <span title="Linked In">
                    <FaLinkedinIn size={10} style={{ color: "secondary" }} />
                </span>
            </a>
            <a className="text-secondary p-2"
                href={contacts.github}>
                <span title="GitHub">
                    <FaGithub size={10} style={{ color: "secondary" }} />
                </span>
            </a>
        </div>
    )
}

export default SocialLinks