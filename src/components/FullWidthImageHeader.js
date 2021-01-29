import React from 'react'

export const FullWidthImageHeader = ({ heading, image }) => {
  return (
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: 'center'
      }}
    >
      <h1
        className="frontpage-header has-text-weight-bold"
        style={{ fontSize: '3rem' }}
      >
        {heading}
      </h1>
    </div>
  )
}
