import React from 'react'
import PropTypes from 'prop-types'

function Play({
  color,
  size = 16
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className="icon icon-play"
    >
      <path
        fill={color || '#fff'}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41 24C41 33.3888 33.3888 41 24 41C14.6112 41 7 33.3888 7 24C7 14.6112 14.6112 7 24 7C33.3888 7 41 14.6112 41 24ZM42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24ZM21 29.1962L30 24L21 18.8038L21 29.1962Z"
      />
    </svg>
  )
}

Play.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}

export default Play
