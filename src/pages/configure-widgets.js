import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default class Category extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            recentPosts: {
                'title': '',
                'numberOfPosts': 5,
                'displayPostDate': false
            }, 
            recentComments: {
                'title': '',
                'numberOfComments': 5
            },
            categories: {
                'title': '',
                'showPostCounts': false
            },
            pages: {
                'title': '',
            }
        }
    }

    recentPostsTitleHandler = e => {
        const { value } = e.target;
        this.setState({
            recentPosts: { ...this.state.recentPosts, title: value } 
        });
    }

    recentPostsNumberHandler = e => {
        const { value } = e.target;
        this.setState({
            recentPosts: { ...this.state.recentPosts, numberOfPosts: value } 
        });
    }

    recentPostsDisplayDateHandler = () => {
        this.setState({
            recentPosts: { ...this.state.recentPosts, displayPostDate: !this.state.recentPosts.displayPostDate } 
        });
    }

    recentCommentsTitleHandler = e => {
        const { value } = e.target;
        this.setState({
            recentComments: { ...this.state.recentComments, title: value } 
        });
    }

    recentCommentsNumberHandler = e => {
        const { value } = e.target;
        this.setState({
            recentComments: { ...this.state.recentComments, numberOfComments: value }
        });
    }

    render() {
        return (
        <Layout>
            <SEO title="widgets" />
            <h1>Configure your widgets here</h1>
                <div className="recent-comments">
                    <h2>Recent Posts: </h2>
                    <p>
                        <label htmlFor="widget-recent-posts">Title:</label>
                        <input className="widefat" type="text" onChange={this.recentPostsTitleHandler}/>
                    </p>
                    <p>
                        <label htmlFor="widget-recent-posts">Number of posts to show:</label>
                        <input className="tiny-text" type="number" step="1" min="1" size="3" onChange={this.recentPostsNumberHandler}/>
                    </p>
                    <p>
                        <input className="checkbox" type="checkbox" onClick={this.recentPostsDisplayDateHandler}/>
                        <label htmlFor="widget-recent-posts-2-show_date">Display post date?</label>
                    </p>
                </div>
                <div class="recent-posts">
                    <h2>Recent Comments: </h2>
                    <p>
                        <label htmlFor="widget-recent-posts">Title:</label>
                        <input className="widefat" type="text" onChange={this.recentCommentsTitleHandler}/>
                    </p>
                    <p>
                        <label htmlFor="widget-recent-posts">Number of posts to show:</label>
                        <input className="tiny-text" type="number" step="1" min="1" size="3" onChange={this.recentCommentsNumberHandler}/>
                    </p>
                </div>
        </Layout>
        )
    }
}
