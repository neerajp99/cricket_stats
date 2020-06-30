import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/styles.css"
import sachin from "../images/sachin.svg"
import escapeRegExp from "escape-string-regexp"
import InputField from "../components/commons/InputField"

const IndexPage = props => {
  const [inputValue, setInputValue] = useState("")
  // const [current, setCurrent] = useState([])
  const [toggleState, setToggleState] = useState(false)

  let countries = [
    "Pakistan",
    "New Zealand",
    "Sri Lanka",
    "England",
    "Bangladesh",
    "West Indies",
    "South Africa",
    "Australia",
    "Zimbabwe",
    "U.A.E.",
    "Kenya",
    "Netherlands",
    "Namibia",
    "Bermuda",
    "Ireland",
  ]
  // Use the input query to filter out country names
  let showingCountries

  if (inputValue) {
    const match = new RegExp(escapeRegExp(inputValue), "i")
    showingCountries = countries.filter(iVal => match.test(iVal))
    // console.log("\n \n")
    // console.log(showingCountries)
  } else {
    showingCountries = countries
  }

  // Detect escape key button press and close the dropdown
  useEffect(() => {
    const handleEscape = event => {
      if (event.keyCode === 27) {
        setToggleState(false)
      }
    }
    window.addEventListener("keydown", handleEscape)

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [])

  // Set countries for the toggle to show up
  const onClickHelper = () => {
    // setCurrent(showingCountries)
    setToggleState(true)
  }

  // Set input state to change the value field
  const onChangeHelper = event => {
    setInputValue(event.target.value)
  }

  return (
    <Layout location={props.location}>
      <div className="max-h-screen max-w-full">
        <div className="w-full h-64 mt-32 container mx-auto sm:mt-32 md:mt-56 lg:mt-56 xl:mt-56">
          <div className="w-2/3 mx-auto sm:w-2/3 md:w-2/3 lg:w-1/2 xl:w-1/2">
            <img src={sachin} className="h-16 mx-auto sm:h-16 md:h-20 lg:h-20 xl:h-20" alt="sachin" />
            <InputField
              placeholder="Search countries for Sachin"
              name="search"
              value={inputValue}
              onChange={onChangeHelper}
              onClick={onClickHelper}
            />
            <div className="">
              {toggleState && (
                <button
                  className="fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-transparent"
                  onClick={() => setToggleState(false)}
                  aria-label="Close"
                ></button>
              )}
              <div className="rounded-lg relative">
                {toggleState &&
                  showingCountries.map((item, key) => {
                    if (key < 5) {
                      return (
                        <span
                          key={key}
                          className="cursor-pointer font-sans font-light text-gray-800 bg-gray-100 block px-5 py-3 hover:bg-gray-200"
                          onClick={() => {
                            setToggleState(!toggleState)
                            setInputValue(item)
                          }}
                        >
                          {item}
                        </span>
                      )
                    }
                  })}
              </div>

              <div className="flex flex-col mb-32 sm:flex-col md:flex-row lg:flex-row xl:flex-row">
                <Link
                  to="/all"
                  className="order-2 cursor-pointer text-center flex-col w-full flex-grow font-sans font-normal tracking-wide m-2 p-4 mt-6 text-blue-500 border-solid border-2 border-blue-500 rounded bg-transparent hover:bg-blue-500 hover:text-white transition duration-500 ease-in-out focus:outline-none sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 sm:order-2 md:order-1 lg:order-1 xl:order-1 "
                >
                  All Results
                </Link>
                <Link
                  to="/all"
                  state={{ country: inputValue }}
                  className="order-1 cursor-pointer text-center flex-col w-full flex-grow bg-blue-500 font-sans font-normal tracking-wide m-2 p-4 mt-6 text-white border-solid border-2 border-blue-500 rounded hover:opacity-75 transition duration-500 ease-in-out focus:outline-none sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 sm:order-1 md:order-2 lg:order-2 xl:order-2"
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
