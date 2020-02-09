import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

export default function RecentComments() {
    const data = useStaticQuery(graphql`
        query {
            allWordpressWpComments {
                edges {
                    node {
                        id
                        author_name
                        post
                        wordpress_id
                    }
                }
            }
            allWordpressPost {
                edges {
                    node {
                        title
                        wordpress_id
                        slug
                    }
                }
            }
        }
    `)

    let comments = data.allWordpressWpComments.edges;
    let posts = data.allWordpressPost.edges;

    return (
        <React.Fragment>
            <h2>Recent Comments</h2> 
            {comments.map(comment => (
                <div key={comment.node.id}>
                    <span>{comment.node.author_name} on {posts.map(el => {
                        if (comment.node.post === el.node.wordpress_id) {
                            return <Link to={`/${el.node.slug}/#comment-${comment.node.wordpress_id}`}>{el.node.title}</Link>;
                        }
                    })}</span><br />
                </div>
            ))}
        </React.Fragment>
    )
}