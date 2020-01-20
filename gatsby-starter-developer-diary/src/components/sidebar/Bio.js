import React from "react"
import "./sidebar.css"

import gi_photo from "../../images/gi_photo.jpeg"

const Bio = ({ author, tagline }) => {

    return (
        <div>
            <tr>
                <td><img src={gi_photo} style={{ maxWidth: `100px`}} className="profile-img" alt="" /></td>
                <td className="my-0 py-0"><h4 className="author-bio">{author}</h4> <small className="text-muted mb-3 pb-3">{tagline}</small></td>
            </tr>
        </div>
    )
}

export default Bio