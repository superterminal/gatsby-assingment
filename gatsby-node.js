/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return graphql(`
        {
            allWordpressPost {
                edges {
                  node {
                    title
                    excerpt
                    content
                    slug
                  }
                }
            }
        }
    `).then(res => {
        res.data.allWordpressPost.edges.forEach(({ node }) => {
            createPage({
                path: node.slug,
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                    slug: node.slug
                },
            })
        })
    })
}