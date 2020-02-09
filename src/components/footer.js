import { Link } from "gatsby"
import React from "react"

import RecentComments from './recent-comments';
import RecentPosts from './recent-posts';

const Footer = () => (
  <footer
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.60rem 1.0875rem`,
      }}
    >
      <h3 style={{ margin: 0 }}>
          Current widgets: 
        {/* <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link> */}
      </h3>
      <RecentComments />
      <RecentPosts />
    </div>
  </footer>
)

export default Footer
