import React from 'react'
// import Link from 'next/link'
import PropTypes from 'prop-types'

// Styles
import './button.scss'

function Button({
  variation = 'primary',
  size = 'm',
  isDisabled,
  children,
  onClick
}) {
  return (
    <button
      className={`
        button
        ${variation}
        ${size}
        ${isDisabled ? 'disabled' : ''}
      `}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  variation: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary'
  ]),
  size: PropTypes.oneOf([
    'm',
    'l',
    'xl'
  ]),
  isDisabled: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func
}

export default Button
