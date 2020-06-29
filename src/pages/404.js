import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const NotFoundPage = props => {
  console.log(props)
  return (
    <Layout location={props.location}>
      <div className="container h-screen mx-auto text-center flex justify-center items-center flex-col">
        <h1 className="font-sans text-6xl font-extrabold text-gray-900">
          404 NOT FOUND
        </h1>
        <p className="mt-6 font-sans text-3xl font-medium text-gray-800">
          Nothing to see here
        </p>
        <Link to="/" className="mt-16 p-4 bg-blue-200 text-blue-700 font-sans px-16 font-normal text-2xl transition duration-500 ease-in-out hover:bg-bue-200 transform hover:-translate-y-1 hover:scale-102 focus:outline-none">
          &#8592; Go Home
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
