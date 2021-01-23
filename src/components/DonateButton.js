import React from 'react'

export const DonateButton = (props) => {

    return <a
        href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
        target="_blank"
        rel="noopener noreferrer"
        {...props.anchorProps}
        >
            <button 
                className='button is-medium is-primary' 
                {...props.buttonProps}
            >
                Donate
            </button>
        </a>
}