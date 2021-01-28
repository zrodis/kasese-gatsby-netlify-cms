import React from 'react'
import { Link } from 'gatsby'

export const DonateButton = (props) => {
  return (

       <Link to="/donate"   title="Donate">
       <button className="button is-medium is-primary" {...props.buttonProps}>
        Donate
      </button>
       </Link>
      

  )
}

