import React from "react"
import { Link } from "gatsby"

const MobilePages = () => {
    return (
        <div className="mobile-pages-main">
                <p className="d-inline p-4"><Link to="/"><span className="text-dark">Home</span></Link></p>
                <p className="d-inline p-4"><Link to="/about"><span className="text-dark">About</span></Link></p>
                <p className="d-inline p-4"><Link to="/archive"><span className="text-dark">Archive</span></Link></p>
        </div>
    )
}

export default MobilePages


