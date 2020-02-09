import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default class Page extends React.Component {

  render() {

    let post = this.props.data.allWordpressPage.edges[0];

    return (
      <Layout>
        <SEO title="home" />
        <h1>Title: {post.node.title}</h1>
        {<div key={post.node.slug}>
            <div dangerouslySetInnerHTML={{ __html: post.node.content}} />
        </div>}
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query($slug: String!) {
    allWordpressPage(filter: { slug: { eq: $slug }}) {
      edges {
        node {
          title
          excerpt
          content
          slug 
          date(formatString: "MMMM DD, YYYY, h:mm:ss a")
        }
      }
    }
  }  
`
