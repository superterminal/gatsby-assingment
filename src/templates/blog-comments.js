import { graphql, useStaticQuery } from 'gatsby';

export const Comments = () => {
   const { allWordpressWpComments } = useStaticQuery(graphql`
        query {
            allWordpressWpComments {
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
