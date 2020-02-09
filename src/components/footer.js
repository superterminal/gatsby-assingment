import { Link } from "gatsby"
import React from "react"

import RecentComments from './recent-comments';
import RecentPosts from './recent-posts';
import Categories from './categories';
import Pages from './pages';

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
        padding: `2rem 1.0875rem`,
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
      <Categories />
      <Pages />
    </div>
  </footer>
)

export default Footer
