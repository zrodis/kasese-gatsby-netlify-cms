import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { kaseseBlack } from '../components/Layout'

const isWide = (count, index) => {
  const isOdd = count % 2 ? 1 : 0
  const isFirst = index === 0

  return isOdd && isFirst
}

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item, index) => {
      const wide = isWide(gridItems.length, index)
      const colWidth = wide ? 'is-12' : 'is-6'

      return (
        <div key={item.text} className={`column ${colWidth}`}>
          <section
            className="section"
            style={{
              background: kaseseBlack,
              color: '#fff',
              borderRadius: '5px',
              padding: '1.5rem',
              maxWidth: '450px',
              margin: '0 auto',
            }}
          >
            <h1 className="has-text-centered white-header-override">
              {item.heading}
            </h1>
            <div
              className="has-text-centered"
              style={{
                overflow: 'hidden',
                display: 'flex',
                marginBottom: '5px',
              }}
            >
              <div
                style={{
                  width: wide ? '100%' : '400px',
                  height: wide ? '400px' : '250px',
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
      )
    })}
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
