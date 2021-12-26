import React from 'react'
import { Link } from 'gatsby'
import Styled from 'styled-components'

const NavigationBar = Styled.nav`
`

const NavigationList = Styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  gap: var(--space-xl);
`

const NavigationItem = Styled.li`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
`
const NavigationLink = Styled(Link)`
  border-bottom: 1.5px solid transparent;
  color: currentColor;
  text-decoration: none;

  &:hover{
    border-bottom-color: var(--primary);
    color: var(--primary);
  }
`


const Navigation = () => (
    <NavigationBar role="navigation" aria-label="Main">
    <NavigationList>
      <NavigationItem>
        <NavigationLink to="/" activeClassName="active">
          Home
        </NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink to="/blog/" activeClassName="active">
          Blog
        </NavigationLink>
      </NavigationItem>
    </NavigationList>
    </NavigationBar>
)

export default Navigation
