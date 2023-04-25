import React from "react"
import Demo from "../components/Demo"
import Head from "next/head"

const demo = () => {
  return (
    <>
      <Head>
        <title>Solve Logistics | Demo</title>
        <meta name="description" content="Customizable Route Planning Software" />
        <link rel="icon" href="/icon3.png" />
      </Head>
      <Demo />
    </>
  )
}

export default demo
