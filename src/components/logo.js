import React from 'react'
import { Link } from 'gatsby'
import Logo from '../assets/jackie.svg'
import Styled from 'styled-components'

const LogoLink = Styled(Link)`
  display: flex;
  font-weight: var(--medium);
  align-items: center;
  flex-direction: row;
  flex-shrink: 0;
  gap: var(--space-md);

@media (max-width: 767px) {
  & > span:last-child {
    border: 0;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
  }
}
`

const HeaderLogo = Styled.span`
  height: var(--size-logo);
  width: var(--size-logo);
  display: block;
  background-image: url(${Logo});
`

const Header = () => (
      <LogoLink to="/">
        <HeaderLogo />
      </LogoLink>
  )
  
  export default Header
  