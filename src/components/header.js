import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = props => {
  const { location } = props
  return (
    <header>
      <div className="z-10 h-10 w-full absolute">
        <Link
          to={
            location.pathname === "/about" ||
            location.pathname === "/all" ||
            location.pathname === "/match"
              ? `/`
              : `/about`
          }
        >
          <span className="cursor-pointer z-30 float-right text-right mr-10 mt-2 font-sans font-normal text-lg text-blue-900 transition duration-500 ease-in-out hover:text-blue-500">
            {location.pathname === "/about" ||
            location.pathname === "/all" ||
            location.pathname === "/match"
              ? "Home"
              : "About"}
          </span>
        </Link>
        <Link
          to={
            location.pathname === "/about" ||
            location.pathname === "/all" ||
            location.pathname === "/match"
              ? `/`
              : `/about`
          }
        >
          <span className=" cursor-pointer z-10 float-right w-16 bg-blue-300 h-2 mt-6 absolute right-0 mr-8 opacity-50" />
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
