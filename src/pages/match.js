import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import StatsList from "./commons/StatList"
import OtherStats from "./commons/OtherStats"

function Match(props) {
  const { data } = props.location.state.data
  // console.log(data)
  let heading = data.opposition.slice(2)
  return (
    <Layout location={props.location}>
      <div className="container mt-16 mx-auto p-3 ">
        <div className="h-20 w-5/6">
          <div className="relative">
            <div className="absolute bg-teal-200 text-teal-700 p-3 px-4 mt-4 ml-2 text-lg rounded-full font-sans font-semibold ">
              vs
            </div>
            <div className="relative p-3 ml-16  text-4xl font-serif font-medium text-gray-800">
              {heading}
            </div>
            <p className="ml-16 w-full relative font-sans font-normal text-gray-700 text-lg -mt-2 p-3 leading-relaxed sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3">
              On {data.date},{" "}
              <span className="bg-blue-200 text-blue-700 font-medium p-2 rounded  ">
                Sachin Tendulkar
              </span>{" "}
              played a cricket match against {heading}. Detailed statistics of
              the match can be found below.
            </p>
          </div>
        </div>

        <div className="flex flex-col mb-4 mt-24 -mx-2 sm:flex-col md:flex-row lg:flex-row xl:flex-row sm:mt-32 md:mt-24 lg:mt-20 xl:mt-20">
          <div className="w-full px-2 mt-6 sm:w-full md:w-4/6 lg:w-4/6 xl:w-4/6 ">
            <div className=" h-auto ">
              <StatsList data={data} />
            </div>
          </div>
          <div className="w-full px-2 sm:w-full md:w-2/6 lg:w-2/6 xl:w-2/6">
            <div className=" h-auto ">
              <OtherStats data={data} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Match
