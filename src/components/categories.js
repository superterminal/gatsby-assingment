import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

export default function Categories() {
    const data = useStaticQuery(graphql`
        query {
            allWordpressCategory {
                nodes {
                    id
                    name
                    count
                }
            }
        }
    `)

    let categories = data.allWordpressCategory.nodes;

    return (
        <React.Fragment>
            <h2>Categories</h2> 
            {categories.map(category => (
                <div key={category.id}>
                    <Link to={`/category/${category.name.toLowerCase()}/`}>{category.name}</Link> ({category.count})
                </div>
            ))}
        </React.Fragment>
    )
}