import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"
import { navigate } from "gatsby"

function Card(props) {
  // console.log(props)
  if (Object.keys(props).length > 2) {
    navigate("/404/", { state: "Not Found" })
    return null
  } else {
    let heading = props.data.opposition.slice(2)
    return (
      <Link
        to={"/match"}
        state={{ data: props }}
        className=" cursor-pointer mt-4 px-2 w-full md:w-1/2 lg:w-1/3 transition duration-500 ease-in-out hover:bg-bue-200 transform hover:-translate-y-1 hover:scale-103 focus:outline-none"
      >
        <div className="border-solid border-2 border-gray-300 p-4 h-40 rounded">
          {" "}
          <div
            className={`bg-${
              props.index % 2 === 0 ? `teal-200` : `blue-200`
            } absolute px-3 text-${
              props.index % 2 === 0 ? `teal-700` : `blue-700`
            } py-1 rounded-full`}
          >
            {props.data.opposition[2]}
          </div>
          <h3 className="absolute font-sans ml-12 font-medium text-gray-700 p-1 text-lg">
            {" "}
            {heading}
          </h3>
          <h5
            className={`relative ml-64 float-right text-sm mt-1 p-1 px-3 font-semibold font-sans rounded ${
              props.data.match_result === "won"
                ? `bg-green-200 text-green-700`
                : props.data.match_result === `lost`
                ? `bg-red-200 text-red-700`
                : `bg-yellow-200 text-yellow-700`
            } `}
          >
            {props.data.match_result}
          </h5>
          <p className="relative mt-12 ml-12 text-md text-light font-sans text-gray-600 font-light">
            India played a game against {heading} at{" "}
            <span className="font-semibold">{props.data.ground}</span> on{" "}
            {props.data.date}.
          </p>
        </div>
      </Link>
    )
  }
}

export default Card
