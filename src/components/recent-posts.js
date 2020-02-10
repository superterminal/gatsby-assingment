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
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    `)

    let posts = data.allWordpressPost.edges;

    return (
        <React.Fragment>
            <h2>Recent posts</h2> 
            {posts.map(post => (
                <div key={post.node.id}>
                    <Link to={`/${post.node.slug}/`}>{post.node.title}</Link>
                    <p>{post.node.date}</p>
                </div>
            ))}
        </React.Fragment>
    )
}
