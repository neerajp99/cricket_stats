import React from "react"

function StatsList(props) {
  const { data } = props

  const initialData = {
    wickets: data.wickets,
    ground: data.ground,
    runs_conceded: data.runs_conceded,
    result_margin: data.result_margin,
    catches: data.catches,
    batting_innings: data.batting_innings,
    stumps: data.stumps,
  }
  const questions = [
    "Total number of wickets taken by Sachin in the match.",
    "The ground at which the match was played.",
    "Total numbers of runs conceded by him during the match.",
    "Result margin of the match.",
    "Total number of catches Sachin took during the match.",
    "Batting Innings of the Indian cricket team.",
    "Total number of stumps taken by him in the match.",
  ]
  return (
    <div className="">
      <ul className="">
        {Object.keys(initialData).map((key, index) => {
          return (
            <li
              className=" bg-gray-100 mt-4 h-20 p-3 sm:h-16 md:h-20 lg:h-16 xl:h-16 "
              key={index}
            >
              <div
                className={`absolute bg-${
                  index % 2 == 0 ? `teal-600` : `yellow-600`
                } h-4 w-4 rounded-full leading-loose text-left mt-3  ml-5`}
              ></div>
              <h3 className="absolute mt-1 p-1 ml-12 text-gray-800 font-sans font-light w-2/3 sm:w-2/3 md:w-2/5 lg:w-1/2 xl:w-2/3">
                {questions[index]}
              </h3>
              <div className="p-1 float-right mt-1 text-gray-700 font-sans font-semibold">
                {initialData[key]}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default StatsList
