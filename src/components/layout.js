import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "../styles/styles.css"

const Layout = ({ location, children }) => {
  return (
    <>
      <div className="min-h-screen font-mono flex flex-col min-w-full min-h-screen font-black">
        <div className="flex-grow min-w-full">
          <Header location={location} />
          {children}
        </div>
        <footer className="bg-blue-500 h-16 text-center leading-10 pt-3 font-sans text-white font-normal tracking-wide">
          Made with ♥ by <a href="http://github.com/neerajp99">Neeraj Pandey</a>
          .
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
