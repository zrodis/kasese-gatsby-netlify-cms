import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import { MainSectionWrapper } from '../components/MainSectionWrapper'

export const DonatePageTemplate = (props) => {
  const { title, content, frontmatter } = props

  return (
    <MainSectionWrapper>
      
      <div style={{textAlign:"center", marginBottom:"2rem"}}>
      <h1 className="is-size-4">To donate with credit card via PayPal click here:</h1>
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="QNXXHQ6MYBSNC" />
          <input
            type="image"
            src="http://cherahealth.org/wp-content/uploads/2019/01/donate_viapaypal_large.png"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
      <HTMLContent className="content" content={content} />
    </MainSectionWrapper>
  )
}

DonatePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const DonatePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <DonatePageTemplate
        title={post.frontmatter.title}
        content={post.html}
        frontmatter={post.frontmatter}
      />
    </Layout>
  )
}

DonatePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DonatePage

export const donatePageQuery = graphql`
  query DonatePage {
    markdownRemark(frontmatter: { templateKey: { eq: "donate-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
