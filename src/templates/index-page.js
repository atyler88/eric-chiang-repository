import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import gmail from '../img/social/gmail.svg'
import ejc from '../img/ejc.jpg'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  
  <div>
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-semibold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            backgroundColor: '#354147',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            margin: '1rem'
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-semibold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            margin: '1rem'
          }}
        >
          {subheading}
        </h3>
        <div className="column social is-large">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
                <a title="gmail" href="https://gmail.com">
                  <img
                    src={gmail}
                    alt="gmail"
                    style={{ width: '2em', height: '2em' }}
                  />
                </a>
              </div>
      </div>
    </div>
    <section className="section">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column">
                  <img
                    src={ejc}
                    alt="EJC"
                    style={{borderRadius: '1rem'}}
                  />
                  </div>
                  <div className="column">
                    <div className="content">
                        <h1 className="title">{mainpitch.title}</h1>
                      <div className="tile is-size-1">
                        <h1>Engineer</h1>
                        {/* <h3 className="subtitle">{mainpitch.description}</h3> */}
                      </div>
                      <div className="tile is-size-1">
                        <h1>Realtor</h1>
                      </div>
                      <div className="tile is-size-1">
                        <h1>Investor</h1>
                      </div>
                    </div>
                  </div>  
                </div>  
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Current Projects
                  </h3>
                
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
