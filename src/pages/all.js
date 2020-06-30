import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Card from "../components/commons/Card"
import { graphql } from "gatsby"
import escapeRegExp from "escape-string-regexp"
import { navigate } from "gatsby"

function AllCards(props) {
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
          <div className="bg-red-100 w-full h-64 mt-6"></div>
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
