import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

// Styles
import './button.scss'

Button.propTypes = {
  variation: PropTypes.string, // primary, secondary
  to: PropTypes.string, // For internal links
  url: PropTypes.string, // External links
  size: PropTypes.string, // M, L, XL
  layer: PropTypes.string, // layer-1, layer-2 or layer-3
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string
}

function Button({
  variation, to, url, size, layer, isDisabled, onClick, text
}) {
  return to ? (
    <Link href={to}>
      <button
        className={`
          button
          ${layer || 'layer-1'}
          ${variation || 'primary'}
          ${size || 'medium'}
          ${isDisabled ? 'disabled' : ''}
        `}
      >
        {text}
      </button>
    </Link>
  ) : (
    <a
      href={url}
      type="button"
      onClick={onClick}
      className={`
        button
        ${layer || 'layer-1'}
        ${variation || 'primary'}
        ${size || 'medium'}
        ${isDisabled ? 'disabled' : ''}
      `}
      disabled={isDisabled}
    >
      {text}
    </a>
  )
}

export default Button
