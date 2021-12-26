import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Header from './header'
import Footer from './footer'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
