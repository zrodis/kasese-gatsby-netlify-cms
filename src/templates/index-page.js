import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { DonateButton } from '../components/DonateButton'
import Features from '../components/Features'
import { MainSectionWrapper } from '../components/MainSectionWrapper'
import logoKchefWhite from '../img/logo/kchef_logo_2021_Karla-outline_white.svg'
import logoKchef from '../img/logo/KASESE_LOGO.gif'

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
      className="home-page-full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
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
        <div className="frontpage-header" style={{ padding: '0.2rem' }}>
          <img
            src={logoKchef}
            style={{ fill: '#fff' }}
            alt="Adult and child logo"
            height="300"
          />

          {/* <h2 className="frontpage-header has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
            {subheading.split('[linebreak]').map((sh) => {
              return (
                <React.Fragment key={sh}>
                  {' '}
                  {sh}
                  <br />
                </React.Fragment>
              )
            })}
          </h2> */}
        </div>
      </div>
    </div>
    <MainSectionWrapper>
      <div className="content">
        <div id="summary" className="content" style={{ marginBottom: '4rem' }}>
          <div className="tile">
            <h1 className="title">{mainpitch.title}</h1>
          </div>
          <div className="tile">
            <p className="subtitle body-color-override">
              <strong>{mainpitch.description}</strong>
            </p>
          </div>
        </div>

        <Features gridItems={intro.blurbs} />

        <div className="columns">
          <div
            className="column is-12 has-text-centered"
            style={{ marginTop: '5rem', marginBottom: '3rem' }}
          >
            <DonateButton
              buttonProps={{ className: 'button is-large is-primary' }}
            />
          </div>
        </div>

        <div className="column is-12 has-text-centered">
          <Link to="/about">
            <button className="button is-medium is-primary is-outlined">
              {'Read more about us >'}
            </button>
          </Link>
        </div>
      </div>
    </MainSectionWrapper>
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
            heading
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
    }
  }
`
