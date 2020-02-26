import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

// Styles
import './button.scss'

function Button({
  variation = 'primary',
  size = 'm',
  isDisabled,
  children,
  onClick,
  url,
  to
}) {
  return to ? (
    <Link href={to}>
      <button
        type="button"
        onClick={onClick}
        className={`
          button
          ${variation}
          ${size}
          ${isDisabled ? 'disabled' : ''}
        `}
        disabled={isDisabled}
      >
        {children}
      </button>
    </Link>
  ) : url ? (
    <a
      href={url}
      onClick={onClick}
      className={`
        button
        ${variation || 'primary'}
        ${size || 'medium'}
        ${isDisabled ? 'disabled' : ''}
      `}
      disabled={isDisabled}
    >
      {children}
    </a>
  ) : (
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
  onClick: PropTypes.func,
  url: PropTypes.string,
  to: PropTypes.string
}

export default Button
