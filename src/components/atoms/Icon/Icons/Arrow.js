import React from 'react'
import PropTypes from 'prop-types'

function Arrow({
  color,
  size = 24
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="icon icon-arrow"
    >
      <path
        stroke={color || '#fff'}
        d="M18 12L14 8L12 6M18 12L14 16L12 18M18 12L6 12"
      />
    </svg>
  )
}

Arrow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}

export default Arrow
