import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/styles.css"
import sachin from "../images/sachin.svg"
import InputField from "./commons/InputField"

const IndexPage = props => {
  const [inputValue, setInputValue] = useState("")
  return (
    <Layout location={props.location}>
      <div className="max-h-screen max-w-full">
        <div className="w-full h-64 mt-40 container mx-auto justify-center items-center flex flex-col">
          <div className="w-1/2">
            <img src={sachin} className="h-20 mx-auto" />
            <InputField
              placeholder="Search country"
              name="search"
              value={inputValue}
              onChange={event => setInputValue(event.target.value)}
            />
            <div className="flex ">
              <button className="flex-row w-1/2 flex-grow font-sans font-medium tracking-wide m-2 p-3 mt-6 text-blue-500 border-solid border-2 border-blue-500 rounded bg-transparent hover:bg-blue-500 hover:text-white transition duration-500 ease-in-out focus:outline-none ">
                All Results
              </button>
              <button className="flex-row w-1/2 flex-grow bg-blue-500 font-sans font-medium tracking-wide m-2 p-3 mt-6 text-white border-solid border-2 border-blue-500 rounded hover:opacity-75 transition duration-500 ease-in-out focus:outline-none ">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
