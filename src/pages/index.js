import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`dan isaza`, `engineering`, `devops`, `leadership`]}
    />
    <p>Hi there! I'm Dan. 👋🏽</p>
    <p>
      I write full-stack software for the web. I like math, statistics, and
      devops.
    </p>
    <p>
      I'm currently the Head of Engineering at{' '}
      <a href="https://listwithclever.com/" target="_blank" rel="noopener">
        Clever Real Estate
      </a>
      . I studied Math & CS at Stanford.
    </p>
    <p>
      My interests include <Link to="/reading">reading</Link>,{' '}
      <a href="https://brutalist-web.design/" target="_blank" rel="noopener">
        brutalist web design
      </a>
      , and{' '}
      <a
        href="https://github.com/PlotterClub/penplotPlayground"
        target="_blank"
        rel="noopener"
      >
        plotting generative art
      </a>
      .
    </p>
    <p>
      You can learn more about me on{' '}
      <a
        href="https://www.linkedin.com/in/danisaza/"
        target="_blank"
        rel="noopener"
      >
        LinkedIn
      </a>
      .
    </p>
    <pre>
      <code>
        <p>Clever is Hiring! (for 2 roles)</p>
        <br />
        <p>- Sr. Backend Engineer with experience in Django.</p>
        <p>- Sr. Designer with experience in CRO focused work</p>
        <br />
        <p>If you're interested, please reach out to me at:</p>
        <p>
          <i>[first name] at this domain</i>
        </p>
      </code>
    </pre>
  </Layout>
)

export default IndexPage
