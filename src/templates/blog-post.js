import React from 'react';
import { graphql, Link } from 'gatsby';

import Img from 'gatsby-image';

import Layout from '../components/layout';

export default ({ data }) => {
    const post = data.allWordpressPost.edges[0].node;
    return (
        <Layout>
            <div>
                <h1>{post.title}</h1>
                <h6>Published on: {new Date(post.date).toString()}</h6>
                {post.featured_media && <Img resolutions={post.featured_media.localFile.childImageSharp.resolutions} />} 
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                <Link to="/">Back</Link>
            </div>
        </Layout>
    )
};

export const query = graphql`
    query($slug: String!) {
        allWordpressPost(filter: { slug: { eq: $slug }}) {
            edges {
                node {
                    title
                    content
                    date
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
    }
`
