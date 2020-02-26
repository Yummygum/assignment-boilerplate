import React from 'react'
import PropTypes from 'prop-types'

function Cross({
  color = '#fff',
  size = 16,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className="icon icon-cross"
      {...props}
    >
      <path
        fill={color}
        d="M42.3848 14.1005L33.8995 5.61519L24 15.5147L14.1005 5.61519L5.61523 14.1005L15.5147 24L5.61522 33.8995L14.1005 42.3847L24 32.4853L33.8995 42.3847L42.3848 33.8995L32.4853 24L42.3848 14.1005Z"
      />
    </svg>
  )
}

Cross.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}

export default Cross
