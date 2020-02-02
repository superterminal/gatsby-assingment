import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <h1>Wordpress blog</h1>
      <h4>Latest Posts</h4>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.slug}>
            <Link to={`/${node.slug}`}>
              <p>Title: {node.title}</p>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt}} />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: {fields: [date], order: DESC }) {
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
