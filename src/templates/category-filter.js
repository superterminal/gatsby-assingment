import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import dateSort from '../shared/date-sort';

export default class Category extends React.Component {
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
    
    const category = posts[0].node.categories[0].name;
    posts = dateSort(posts, this.state.sortPostsBy);

    return (
      <Layout>
        <SEO title="home" />
        <h1>Category: {category}</h1>
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
  query($categoryName: String!) {
    allWordpressPost(sort: {fields: [date], order: DESC }, filter: {categories: { elemMatch: {name: {eq: $categoryName}}}}) {
      edges {
        node {
          title
          excerpt
          slug 
          date(formatString: "MMMM DD, YYYY, h:mm:ss a")
          categories {
            name
          }
        }
      }
    }
  }  
`
