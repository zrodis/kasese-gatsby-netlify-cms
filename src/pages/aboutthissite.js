import React from 'react'
import Layout from '../components/Layout'

const AboutThisSite = () => {
    return (
      <Layout>
          <div style={{minHeight: '15vh', margin: '100px 5%'}}>

            <a className="light-link" href="https://zachrodis.com" target="_blank">Zach Rodis</a> made this site with an open source technology called <a className="light-link" href="https://www.gatsbyjs.com" target="_blank">gatsbyjs</a>
          </div>
      </Layout>
    )
  }

  export default AboutThisSite