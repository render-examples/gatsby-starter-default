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
      I'm currently the Head of Engineering at{' '}
      <a href="https://listwithclever.com/">Clever Real Estate</a>. I studied
      Math & CS at Stanford.
    </p>
    <p>
      My interests include <Link to="/reading">reading</Link>,{' '}
      <a href="https://brutalist-web.design/" target="_blank">
        brutalist web design
      </a>
      , and{' '}
      <a
        href="https://github.com/PlotterClub/penplotPlayground"
        target="_blank"
      >
        plotting generative art
      </a>
      .
    </p>
    <p>
      You can learn more about me on{' '}
      <a href="https://www.linkedin.com/in/danisaza/" target="_blank">
        LinkedIn
      </a>
      , and – if you're good at guessing – you're welcome to email me.
    </p>
  </Layout>
)

export default IndexPage
