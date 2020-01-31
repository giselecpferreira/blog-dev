import React from "react"
import {
    FaLinkedinIn,
    FaGithub
} from "react-icons/fa"
import "./sidebar.css"


const SocialLinks = ({ contacts }) => {
    return (
        <div className="side-social-links float-left mt-3 mb-3">
            <a className="text-secondary p-2 target"
                href={contacts.linkedin}
                target="_blank" >
                <span title="Linked In"  target="_blank">
                    <FaLinkedinIn size={10} style={{ color: "secondary" }} />
                </span>
            </a>
            <a className="text-secondary p-2 target"
                href={contacts.github}
                target="_blank">
                <span title="GitHub">
                    <FaGithub size={10} style={{ color: "secondary" }} />
                </span>
            </a>
        </div>
    )
}

export default SocialLinks