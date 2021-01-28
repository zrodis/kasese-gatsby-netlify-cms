import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import { MainSectionWrapper } from '../components/MainSectionWrapper'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const AboutPageTemplate = (props) => {
  const { title, content, contentComponent, frontmatter } = props

  return (
    <MainSectionWrapper>
      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
        {title}
      </h2>
      {frontmatter.intro.blurbs.map((blurb) => {
        return (
          <div className="content" key={blurb.heading}>
            <h3 className="is-size-4 has-text-weight-bold is-bold-light">
              {blurb.heading}
            </h3>
            {blurb.image ? (
              <div className="columns">
                <div className="column is-6">
                  <PreviewCompatibleImage imageInfo={blurb} />
                </div>
                <div className="column is-6">
                  <p>{blurb.text}</p>
                </div>
              </div>
            ) : (
              <p>{blurb.text}</p>
            )}
          </div>
        )
      })}
      <HTMLContent className="content" content={content} />
    </MainSectionWrapper>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title}
        content={post.html}
        frontmatter={post.frontmatter}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage
//8844b65c-3fc5-5db4-9603-6e98353103b5
export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
      frontmatter {
        title
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
