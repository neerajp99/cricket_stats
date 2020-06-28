import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = props => {
  const { location } = props
  console.log(location)
  return (
    <header>
      <div className="z-10 h-10 w-full absolute">
        <Link
          to={
            location.pathname == "/about" || location.pathname == "/all"
              ? `/`
              : `/about`
          }
        >
          <span className="z-30 float-right text-right mr-10 mt-2 font-sans font-semibold text-blue-900">
            {location.pathname == "/about" || location.pathname == "/all"
              ? "Home"
              : "About"}
          </span>
        </Link>
        <Link
          to={
            location.pathname == "/about" || location.pathname == "/all"
              ? `/`
              : `/about`
          }
        >
          <span className="z-10 float-right w-16 bg-blue-300 h-2 mt-6 absolute right-0 mr-8 opacity-50" />
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
