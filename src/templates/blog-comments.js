import { graphql, useStaticQuery } from 'gatsby';

export const Comments = () => {
   const { allWordpressWpComments } = useStaticQuery(graphql`
        query($postId: Int!) {
            allWordpressWpComments(filter: {post: {eq: $postId}}) {
                edges {
                    node {
                        id
                        content
                    }
                }
            }
        }
   `);

    return allWordpressWpComments.edges;
}
