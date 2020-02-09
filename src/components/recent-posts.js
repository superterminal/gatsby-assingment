import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

export default function RecentPosts() {
    const data = useStaticQuery(graphql`
        query {
            allWordpressPost {
                edges {
                    node {
                        title
                        id
                        slug
                    }
                }
            }
        }
    `)

    let posts = data.allWordpressPost.edges;

    return (
        <React.Fragment>
            <h2>Recent Posts</h2> 
            {posts.map(post => (
                <div key={post.node.id}>
                    <Link to={`/${post.node.slug}/`}>{post.node.title}</Link>
                </div>
            ))}
        </React.Fragment>
    )
}