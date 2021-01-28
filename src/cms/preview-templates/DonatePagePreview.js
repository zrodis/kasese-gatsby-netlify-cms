import React from 'react'
import PropTypes from 'prop-types'
import { DonatePageTemplate } from '../../templates/donate-page'

const DonatePagePreview = ({ entry, widgetFor }) => (
  <DonatePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

DonatePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DonatePagePreview
