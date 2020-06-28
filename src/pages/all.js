import React from "react"
import Layout from "../components/layout"

function AllCards(props) {
  return (
    <Layout location={props.location}>
      <div>
        <div className="container mx-auto mt-16 overflow-y-auto p-6">
          <h1 className="font-serif text-left text-3xl font-medium tracking-wide sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl">
            {" "}
            All about{" "}
            <span className="font-semibold text-blue-600">Sachin.</span>
          </h1>
          <h4 className="font-medium text-sans w-5/6 mt-6 text-gray-700 leading-normal sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/2">
            Below is a list of{" "}
            <span className="bg-blue-200 text-blue-600 rounded p-1 font-semibold">
              cards
            </span>{" "}
            for each match played by Sachin Tendulkar and overall{" "}
            <span className="font-semibold text-gray-900">statistics</span> of
            his career.
          </h4>
          <div className="bg-red-100 w-full h-64 mt-6"></div>
        </div>
      </div>
    </Layout>
  )
}
export default AllCards
