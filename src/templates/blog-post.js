import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';

export default ({ data }) => {
    const post = data.allWordpressPost.edges[0].node;
    console.log(data)
    return (
        <Layout>
            <div>
                <h1>{post.title}</h1>
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
                }
            }
        }
    }
`
