import React from 'react'
import Styled from 'styled-components'
import Logo from './logo'
import Navigation from './navigation'

const HeaderBar = Styled.header`
  display: flex;
  justify-content: space-between;
  max-width: var(--size-max-width);
  align-items: center;
  margin: 0 auto;
  padding: var(--space-2xl) var(--size-gutter);
`

const Header = () => (
  <HeaderBar>
    <Logo to="/" />
    <Navigation />
  </HeaderBar>
)

export default Header
