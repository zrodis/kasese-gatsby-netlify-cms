import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Features from '../components/Features'
import { MainSectionWrapper } from '../components/MainSectionWrapper'
import { FullWidthImageHeader } from '../components/FullWidthImageHeader'

export const HealthPageTemplate = (props) => {
  const {
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
    main,
    content,
  } = props

  console.log('props', props)

  return (
    <div>
      <FullWidthImageHeader heading={heading} image={image} />
      <MainSectionWrapper>
        <div className="content">
          <div className="content">
            <div className="tile">
              <h1 className="title">{mainpitch.title}</h1>
            </div>
            <div className="tile">
              <p className="subtitle body-color-override">
                <strong>{mainpitch.description}</strong>
              </p>
            </div>
          </div>
          {/* intro */}
          <Features gridItems={intro.blurbs} />
        </div>
        <div style={{ margin: '5rem' }}></div>
        {/* main */}
        <div className="columns">
          <div className="column is-16">
            <h3 className="has-text-weight-semibold is-size-3">
              {main.heading}
            </h3>
            <p>{main.description}</p>
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child">
                  <PreviewCompatibleImage imageInfo={main.image1} />
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child">
                  <PreviewCompatibleImage imageInfo={main.image2} />
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child">
                <PreviewCompatibleImage imageInfo={main.image3} />
              </article>
            </div>
          </div>
        </div>
        <HTMLContent className="content" content={content} />
      </MainSectionWrapper>
    </div>
  )
}

HealthPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.any,
  content: PropTypes.any,
}

const HealthPage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter

  return (
    <Layout>
      <HealthPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        content={data.markdownRemark.html}
      />
    </Layout>
  )
}

HealthPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HealthPage

export const pageQuery = graphql`
  query HealthPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "health-page" } }) {
      html
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
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
