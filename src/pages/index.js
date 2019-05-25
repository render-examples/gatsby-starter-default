import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p>
      I write full-stack software for the web. I like math, statistics, and
      devops.
    </p>
    <p>
      I'm the Head of Engineering at{' '}
      <a href="https://listwithclever.com/">Clever Real Estate</a>.
    </p>
    <p>
      My other interests include <Link to="/reading">reading</Link>,{' '}
      <a href="https://brutalist-web.design/">brutalist web design</a>, and{' '}
      <a href="https://github.com/PlotterClub/penplotPlayground">
        plotting generative art
      </a>
      .
    </p>
  </Layout>
)

export default IndexPage
