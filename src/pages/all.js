import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Card from "../components/commons/Card"
import { graphql } from "gatsby"
import escapeRegExp from "escape-string-regexp"
import { navigate } from "gatsby"

function AllCards(props) {
  let overall_statistics = {
    highest_score: 200,
    max_win_opposition: "SL",
    max_win_count_opposition: 43,
    tosses_win: 239,
    total_matches_win: 234,
    total_averge: 39.79,
  }
  let overall_statistics_text = [
      "Highest Score",
      "Opposition Max Wins",
      "Max Same Opposition Wins",
      "Total Tosses Won",
      "Total Matches Won",
      "Overall Career Average"
  ]
  let { allSachinJson } = props.data
  const sachinData = allSachinJson.edges.map(e => e.node)
  const [search, setSearch] = useState("")
  let country = ""
  // Check if the object is null
  const isNull = value => typeof value === "object" && !value
  let loc = { country: "" }

  useEffect(() => {
    if (props.location.state == null) {
      navigate("/404/", { state: "Not Found" })
      return null
    } else {
      if (!isNull(props.location.state)) {
        loc = props.location.state
        if (Object.keys(loc).length > 1) {
          country = loc.country
        }
      }
      setSearch(country)
    }
  }, [country])

  // Filter out matches using country
  let showingMatches
  if (search) {
    const match = new RegExp(escapeRegExp(search), "i")
    showingMatches = sachinData.filter(searchItem =>
      match.test(searchItem.opposition)
    )
  } else {
    showingMatches = sachinData
  }

  return (
    <Layout location={props.location}>
      <div>
        <div className="container mx-auto mt-16 overflow-y-auto p-6">
          <h1 className="font-serif text-left text-3xl font-medium tracking-wide sm:text-3xl md:text-6xl lg:text-6xl xl:text-6xl">
            {" "}
            All about{" "}
            <span className="font-semibold text-blue-600">Sachin.</span>
          </h1>
          <h4 className="font-normal font-sans text-lg w-5/6 mt-6 text-gray-700 leading-normal sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/2">
            Below is a list of{" "}
            <span className="bg-blue-200 text-blue-600 rounded p-1 font-semibold">
              cards
            </span>{" "}
            for each match played by Sachin Tendulkar and overall{" "}
            <span className="font-semibold text-gray-900">statistics</span> of
            his career.
          </h4>
          <div className="w-full h-auto mt-10 flex mb-4 md:h-auto lg:h-64 xl:h-64 flex-wrap">
            {Object.keys(overall_statistics).map((key, index) => {
              return (
                <div class={`mt-2 w-1/2 bg-gray-${index % 2 == 0 ? `100` : `200`} h-40 text-center sm:w-1/2 md:w-1/2 lg:w-1/6 xl:w-1/6 flex-row sm:flex-row xl:flex-row lg:flex-row md:flex-row md:h-40 lg:h-full xl:h-full`}>
                  <h3 className={`text-2xl mt-10 font-sans text-blue-900 md:text-4xl lg:text-4xl xl:text-5xl md:mt-10 lg:mt-20 xl:mt-20`}>
                    {overall_statistics[key]}
                  </h3>
                  <p className="font-sans font-normal text-gray-600 w-2/3 mx-auto text-center">
                    {overall_statistics_text[index]}
                  </p>
                </div>
              )
            })}
          </div>
          <div className="mt-6 w-full h-10">
            <h4 className="absolute font-mono font-medium text-gray-800 mt-2">
              All Matches &darr;
            </h4>
            <input
              className="float-right h-10 w-1/2 font-sans font-light border-solid border border-gray-400 p-2 rounded text-gray-700 focus:outline-none focus:border-blue-300 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3"
              placeholder="Filter countries"
              value={search}
              name="search"
              onChange={event => {
                setSearch(event.target.value)
              }}
            ></input>
          </div>
          <div className="text-sans flex flex-wrap -mx-2 my-6 ">
            {showingMatches.map((item, index) => {
              return <Card key={index} data={item} index={index} />
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default AllCards

export const pageQuery = graphql`
  query {
    allSachinJson {
      edges {
        node {
          batting_score
          wickets
          runs_conceded
          catches
          stumps
          opposition
          ground
          date
          match_result
          result_margin
          toss
          batting_innings
        }
      }
    }
  }
`
