import React from 'react';
import { graphql, Link } from 'gatsby';

import Img from 'gatsby-image';

import Layout from '../components/layout';
import { Comments } from './blog-comments';

export default ({ data }) => {
    const post = data.allWordpressPost.edges[0].node;
    // const comments = Comments();
    const comments = data.allWordpressWpComments.edges;
    return (
        <Layout>
            <div>
                <h1>{post.title}</h1>
                <h6>Published on: {post.date}</h6>
                {post.featured_media && <Img resolutions={post.featured_media.localFile.childImageSharp.resolutions} />} 
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                <h2>Comments: </h2>
                {comments.map(comment => (
                    <div>
                        <span>By: {comment.node.author_name}, Date: {comment.node.date}</span> 
                        <div dangerouslySetInnerHTML={{ __html: comment.node.content}} />
                    </div>
                ))}
                <Link to="/">Back</Link>
            </div>
        </Layout>
    )
};

export const query = graphql`
    query($slug: String!, $postId: Int!) {
        allWordpressPost(filter: { slug: { eq: $slug }}) {
            edges {
                node {
                    id
                    title
                    content
                    date(formatString: "MMMM DD, YYYY")
                    featured_media {
                        localFile {
                          childImageSharp {
                            resolutions(width:400, height:300) {
                              src
                              width
                              height
                            }
                          }
                        }
                    }
                }
            }
        }
        allWordpressWpComments(filter: {post: {eq: $postId}}) {
            edges {
                node {
                    id
                    content
                    author_name
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
`
