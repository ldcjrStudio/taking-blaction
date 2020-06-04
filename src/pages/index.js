import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import change from "../images/change.png"
import tbblk from "../images/tb-bgblk.png"
import donate from "../images/donate.png"
import sign from "../images/sign.png"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* children are getting passed into layout component */}
    {/* <SEO title="Home" /> */}

    <div id="hero">
      <div>
        <img src={tbblk}></img>
      </div>

      <div>
        <h2>its time for change.</h2>
        <p>
          The goal of this collective is to compile resources for black justice
          into one place so that anyone can easily access and navigate all of
          the databanks, resources, and links to black justice materials.
        </p>
      </div>
    </div>

    <div id="take-blaction">
      <Link to="/petitions/" className="main-link">
        <img src={sign}></img>
        <h3>Petitions</h3>
      </Link>
      <Link to="/donations/" className="main-link">
        <img src={donate}></img>
        <h3>Donate</h3>
      </Link>
    </div>
    {/* <p>
        #TAKEBLACTION is a diverse group invested in making lasting, positive
        and impactful change. We've created a collective working to define the
        term, #Blact (verb): to act with the intent of benefitting black lives.
      </p> */}
    {/* 
      <p>
        We recognize that credible black justice resources can be difficult to
        find. TakeBlaction is here to make these resources as accessible as
        possible.
      </p> */}

    <div id="about-us"></div>

    <div id="contact"></div>
  </Layout>
)

export default IndexPage
