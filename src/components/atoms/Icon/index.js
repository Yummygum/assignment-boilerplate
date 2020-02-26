import React from 'react'
import PropTypes from 'prop-types'

// Icons
import Menu from './Icons/Menu'
import Plus from './Icons/Plus'
import Cross from './Icons/Cross'
import Arrow from './Icons/Arrow'
import Play from './Icons/Play'

function Icon({
  name,
  ...props
}) {
  return (
    <>
      {{
        menu: <Menu {...props} />,
        plus: <Plus {...props} />,
        cross: <Cross {...props} />,
        arrow: <Arrow {...props} />,
        play: <Play {...props} />
      }[name]}
    </>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Icon
