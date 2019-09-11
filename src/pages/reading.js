import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Reading" keywords={[`gatsby`, `application`, `react`]} />
    <h2>Reading</h2>
    <p>
      I love reading, especially with audiobooks. I'm open to not finishing
      books, which I represent with a <s>strikethrough</s> in the list below.
    </p>
    <h3>Got Suggestions?</h3>
    <p>
      I'm currently looking for book recommendations about Engineering
      leadership.
    </p>
    <p>
      I'd love to get your suggestions through{' '}
      <a
        href="https://airtable.com/shrJNWYtbol5Cg9n1"
        target="_blank"
        rel="noopener"
      >
        this form
      </a>
      !
    </p>
    <hr />
    <h4>Currently reading</h4>
    <ul className="reading">
      <li>
        <i>High Output Management</i> - Andy Grove
      </li>
      <li>
        <i>Finite and Infinite Games</i> - James P. Carse
      </li>
      <li>
        <i>Making Websites Win</i> - Ben Jesson, Karl Blanks
      </li>
      <li>
        <i>Python Tricks</i> - Dan Bader
      </li>
    </ul>
    <h4>Reading Soon</h4>
    <ul className="reading">
      <li>
        <i>The Goal</i> - Eliyahu M. Goldratt
      </li>
      <li>
        <i>The Great CEO Within</i> - Matt Mochary
      </li>
    </ul>
    <h4>Recently read</h4>
    <ul className="reading">
      <li>
        <i>The Five Dysfunctions of a Team</i> - Patrick Lencioni
      </li>
      <li>
        <i>Getting Things Done</i> - David Allen
      </li>
      <li>
        <i>I Will Teach You to Be Rich</i> - Ramit Sethi
      </li>
      <li>
        <i>The War of Art</i> - Steven Pressfield
      </li>
      <li>
        <i>No is Not Enough</i> - Naomi Klein
      </li>
      <li>
        <i>The Checklist Manifesto</i> - Atul Gawande
      </li>
      <li>
        <i>Atomic Habits</i> - James Clear
      </li>
      <li>
        <i>Managing Oneself</i> - Peter F. Drucker
      </li>
      <li>
        <i>We Were Eight Years in Power</i> - Ta-Nehisi Coates
      </li>
      <li>
        <i>The Manager's Path</i> - Camille Fournier
      </li>
      <li>
        <s>
          <i>Extreme Ownership</i> - Jocko Willink, Leif Babin
        </s>{' '}
        (felt like an in-depth and trigger-happy military memoir)
      </li>
      <li>
        <i>The Last Black Unicorn</i> - Tiffany Haddish
      </li>
      <li>
        <i>Company of One</i> - Paul Jarvis
      </li>
      <li>
        <s>
          <i>Influence</i> - Robert B. Cialdini
        </s>
        {` `}(wasn't captivating)
      </li>
      <li>
        <i>The Culture Code</i> - Daniel Coyle
      </li>
      <li>
        <i>Beyond the Phoenix Project</i> - Gene Kim, John Willis
      </li>
      <li>
        <i>The DevOps Handbook</i> - Gene Kim, Patrick Debois, John Willis, Jez
        Humble
      </li>
      <li>
        <i>Blitzscaling</i> - Chris Yeh, Reid Hoffman
      </li>
      <li>
        <i>High Growth Handbook</i> - Elad Gil
      </li>
      <li>
        <i>Measure What Matters</i> - John Doerr
      </li>
      <li>
        <i>The Autobiography of Benjamin Franklin</i> - Benjamin Franklin
      </li>
      <li>
        <i>The Hard Thing About Hard Things</i> - Ben Horowitz
      </li>
      <li>
        <i>The Shock Doctrine</i> - Naomi Klein
      </li>
      <li>
        <i>Rework</i> - Jason Fried, David Heinemeier Hansson
      </li>
      <li>
        <i>The Lean Startup</i> - Eric Ries
      </li>
      <li>
        <i>Lost and Founder</i> - Rand Fishkin
      </li>
      <li>
        <i>The Phoenix Project</i> - Gene Kim, Kevin Behr, George Spafford
      </li>
      <li>
        <i>The 15 Commitments of Conscious Leadership</i> - Jim Dethmer, Diana
        Chapman, Kaley Klemp
      </li>
      <li>
        <i>The $100 Startup</i> - Chris Guillebeau
      </li>
      <li>
        <i>Who Rules the World?</i> - Noam Chomsky
      </li>
      <li>
        <i>Four Futures</i> - Peter Frase
      </li>
      <li>
        <i>The Bottom Billion</i> - Paul Collier
      </li>
      <li>
        <i>Why Nations Fail</i> - Darron Acemoglu, James Robinson
      </li>
      <li>
        <i>Bossypants</i> - Tina Fey
      </li>
      <li>
        <i>The New Confessions of an Economic Hitman</i> - John Perkins
      </li>
      <li>
        <i>Between the World and Me</i> - Ta-Nehisi Coates
      </li>
      <li>
        <i>Red Notice</i> - Bill Browder
      </li>
      <li>
        <i>The Signal and the Noise</i> - Nate Silver
      </li>
      <li>
        <i>The Pragmatic Programmer</i> - Andy Hunt, Dave Thomas
      </li>
    </ul>
  </Layout>
)

export default IndexPage
