import React from 'react';
import { graphql, Link } from 'gatsby';

import Img from 'gatsby-image';

import Layout from '../components/layout';
import dateSort from '../shared/dateSort';

export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortCommentsBy: 'DESC'
        };
    }

    sortChangeHandler = e => {
        const { value } = e.target;
        this.setState({
            sortCommentsBy: value
        });
    }

    render() {
        const post = this.props.data.allWordpressPost.edges[0].node;
        let comments = this.props.data.allWordpressWpComments.edges;

        comments = dateSort(comments, this.state.sortCommentsBy);

        return (
            <Layout>
                <div>
                    <h1>{post.title}</h1>
                    <h6>Published on: {post.date}</h6>
                    <h6>Category: {post.categories[0].name}</h6>
                    {post.featured_media && <Img resolutions={post.featured_media.localFile.childImageSharp.resolutions} />} 
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    <hr/>
                    {comments.length !== 0 ? <div>
                            <h2>Comments: </h2>
                            <h3>Sort by: </h3><select onChange={this.sortChangeHandler}>
                                    <option value="DESC">Descending</option>
                                    <option value="ASC">Ascending</option>
                            </select>
                            {comments.map(comment => (
                                <div key={comment.node.id}>
                                    <span>By: {comment.node.author_name}, Date: {comment.node.date}</span>
                                    <hr/>
                                    <div dangerouslySetInnerHTML={{ __html: comment.node.content}} />
                                </div>
                            ))}
                    </div> : <h2>No comments yet!</h2>}
                    
                    <Link to="/">Back</Link>
                </div>
            </Layout>
        )
    }
}

export const pageQuery = graphql`
    query($slug: String!, $postId: Int!) {
        allWordpressPost(filter: { slug: { eq: $slug }}) {
            edges {
                node {
                    id
                    title
                    content
                    date(formatString: "MMMM DD, YYYY, h:mm:ss a")
                    categories {
                        name
                    }
                    featured_media {
                        localFile {
                          childImageSharp {
                            resolutions(width:400, height:300) {
                              src
                              width
                              height
                              srcSet
                            }
                          }
                        }
                    }
                }
            }
        }
        allWordpressWpComments(filter: {post: {eq: $postId}}, sort: { fields: date, order: DESC }) {
            edges {
                node {
                    id
                    content
                    author_name
                    date(formatString: "MMMM DD, YYYY, h:mm:ss a")
                }
            }
        }
    }
`