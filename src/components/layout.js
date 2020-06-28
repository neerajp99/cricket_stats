/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="min-h-screen flex flex-col min-w-full min-h-screen font-mono font-black">
        <div className="flex-grow min-w-full">
          <Header location={location} />
          {children}
        </div>
        <footer className="bg-blue-500 h-16 text-center leading-10 pt-3 font-sans text-white font-medium tracking-wide">
          Made with ♥ by Neeraj Pandey.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
