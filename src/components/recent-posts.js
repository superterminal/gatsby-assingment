import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

export default function RecentPosts() {
    const data = useStaticQuery(graphql`
        query {
            allWordpressPost {
                edges {
                    node {
                        title
                        id
                        slug
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    `)

    let posts = data.allWordpressPost.edges;

    let numberOfPosts = 5;
    let isDisplayDate = false;

    if (typeof window !== 'undefined') {
        numberOfPosts = JSON.parse(localStorage.getItem('recentPostsNumber')).numberOfPosts;
        isDisplayDate = JSON.parse(localStorage.getItem('recentPostsDisplayDate')).displayPostDate;
    } 
    
    let postsAsText = [];

    for (let i = 0; i < parseInt(numberOfPosts); i++) {
        if (posts[i] !== undefined) {
            if (isDisplayDate) {
                var date = posts[i].node.date;
            }
            postsAsText.push({
                key: `${posts[i].node.id}`,
                linkTo: `${posts[i].node.slug}`,
                title: `${posts[i].node.title}`,
                date: date !== undefined ? date : ''
            });
        }  
    }

    let currentTitle = JSON.parse(localStorage.getItem('recentPostsTitle')).title;

    return (
        <React.Fragment>
            <h2>{currentTitle ? currentTitle : 'Recent Posts'}</h2> 
            {postsAsText.map(post => (
                <div key={post.key}>
                    <Link to={`/${post.linkTo}/`}>{post.title}</Link>
                    <p>{post.date}</p>
                </div>
            ))}
        </React.Fragment>
    )
}
