import React from "react"
import { Link } from "gatsby"

function OtherStats(props) {
  const { data } = props
  const items = {
    batting_score: data.batting_score,
    toss: data.toss,
    date: data.date,
    match_result: data.match_result,
  }

  const item_content = [
    "Runs Scored",
    "Toss Status",
    "Played On",
    "Match Result",
  ]
  return (
    <div className="">
      <ul className="mx-auto w-56 text-center sm:text-center md:text-center lg:text-left xl:text-left">
        {Object.keys(items).map((key, index) => {
          return (
            <React.Fragment key={key}>
              <li
                className={`mt-10 font-sans text-${
                  key === "batting_score" ? `5xl` : `md`
                } font-medium text-${
                  items[key] === "won"
                    ? "green-700"
                    : items[key] === "lost"
                    ? "red-700"
                    : "gray-800"
                }`}
              >
                {items[key]}
              </li>
              <span className="text-gray-500 font-light font-sans">
                {item_content[index]}
              </span>
            </React.Fragment>
          )
        })}
        <br />
        <Link
          to="/all"
          className=" relative cursor-pointer float-left mt-12 ml-16 bg-blue-100 p-2 font-sans font-medium text-blue-500 md:ml-16 lg:ml-0 xl:ml-0"
        >
          &#8592; Go Back
        </Link>
      </ul>
    </div>
  )
}
export default OtherStats
