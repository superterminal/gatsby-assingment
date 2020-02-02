import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import dateSort from '../shared/dateSort';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortPostsBy: 'DESC'
    }
  }

  sortChangeHandler = e => {
    const { value } = e.target;
    this.setState({
        sortPostsBy: value
    });
  }

  render() {

    let posts = this.props.data.allWordpressPost.edges;

    posts = dateSort(posts, this.state.sortPostsBy);

    return (
      <Layout>
        <SEO title="home" />
        <h1>Wordpress blog</h1>
        <select onChange={this.sortChangeHandler}>
              <option value="DESC">Latest</option>
              <option value="ASC">Oldest</option>
        </select> Posts
        {posts.map(({ node }) => (
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
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: {fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug 
          date(formatString: "MMMM DD, YYYY, h:mm:ss a")
        }
      }
    }
  }  
`
