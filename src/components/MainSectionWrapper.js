import React from 'react'

export const MainSectionWrapper = ({ children }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">{children}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
