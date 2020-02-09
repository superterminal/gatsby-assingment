import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

export default function Pages() {
    const data = useStaticQuery(graphql`
        query {
            allWordpressPage {
                edges {
                    node {
                        id
                        slug
                        title
                    }
                }
            }
        }
    `)

    let pages = data.allWordpressPage.edges;

    return (
        <React.Fragment>
            <h2>Pages</h2> 
            {pages.map(page => (
                <div key={page.node.id}>
                    <Link to={`/${page.node.slug}`}>{page.node.title}</Link>
                </div>
            ))}
        </React.Fragment>
    )
}