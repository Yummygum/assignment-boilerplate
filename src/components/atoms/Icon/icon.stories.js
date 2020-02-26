import React from 'react'
import { withA11y } from '@storybook/addon-a11y'

import Icon from '.'

export default {
  title: 'Components | Atoms / Icon',
  decorators: [withA11y],
}

export const Menu = () => <Icon name="menu" size={48} />
export const Plus = () => (
  <div className="wrapper">
    <Icon name="plus" size={48} />
    <Icon name="plus" size={32} />
    <Icon name="plus" size={24} />
  </div>
)
export const Cross = () => (
  <div className="wrapper">
    <Icon name="cross" size={48} />
    <Icon name="cross" size={32} />
    <Icon name="cross" size={24} />
  </div>
)
export const Arrow = () => <Icon name="arrow" size={24} />
export const Play = () => <Icon name="play" size={48} />
