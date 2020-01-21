import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Bio from "./Bio"
import "./sidebar.css"
import TechTags from "./TechTags"


const Sidebar = () => {
    return (
        <StaticQuery
            query={graphql`
                query SiteBioQuery {
                    site {
                        siteMetadata {
                            title
                            tagline
                            author
                            contacts {
                                linkedin
                                github
                            }
                            labels {
                                tag
                                tech
                                name 
                                size 
                                color
                            }
                        }
                    }
                    allMarkdownRemark(
                        limit: 10
                        sort: { fields: [frontmatter___date], order: DESC }
                        filter: { frontmatter: { published: { eq: true } } }
                    ) {
                        edges {
                            node {
                                frontmatter {
                                    tags
                                }
                            }
                        }
                    }
                }
            `}
            render={data => (
                <>
                    <div className="sidebar-main border-right mt-0 pt-0">
                        <Bio author={data.site.siteMetadata.author} tagline={data.site.siteMetadata.tagline} />
                        
                        <div className="tech-tags mt-4">
                            <TechTags labels={data.site.siteMetadata.labels} posts={data.allMarkdownRemark.edges} />
                        </div>
                    </div>
                </>
            )}
        />
    )
}

export default Sidebar