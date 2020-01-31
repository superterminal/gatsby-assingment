import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <h1>Wordpress blog</h1>
      <h4>Posts</h4>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div>
            <p>{node.title}</p>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt}} />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: {fields: [title]}) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }  
`
