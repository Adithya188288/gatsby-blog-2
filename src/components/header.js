import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#333`,
      marginBottom: `1.45rem`,
    }}
  >
    <div style={{display:'flex', justifyContent:"space-between", alignItems:"center"}} >
      <h3>{siteTitle}</h3>
      <div>
        <Link style={{margin:"10px"}} to="/">Home</Link>
        <Link style={{margin:"10px"}} to="/about">About</Link>
        <Link style={{margin:"10px"}} to="/blog">Blog</Link>
        <Link style={{margin:"10px"}} to="/page-2">Page 2</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
