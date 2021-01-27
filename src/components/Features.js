import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { kasesePurple } from '../components/Layout'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section
          className="section"
          style={{
            background: kasesePurple,
            color: '#fff',
            borderRadius: '5px',
            padding: '1.5rem',
          }}
        >
          <h1 className="has-text-centered white-header-override">
            {item.heading}
          </h1>
          <div
            className="has-text-centered"
            style={{ overflow: 'hidden', display: 'flex', marginBottom: '5px' }}
          >
            <div
              style={{
                width: '400px',
                height: '250px',
                display: 'inline-block',
                overflow: 'hidden',
                justifySelf: 'center',
              }}
            >
              <PreviewCompatibleImage
                imageInfo={item}
                imageStyle={{ height: '100%' }}
              />
            </div>
          </div>
          <p className="has-text-weight-semibold">{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
