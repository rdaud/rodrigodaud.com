import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Header, Footer } from '../../theme'
import { Wrapper } from './styles.js'

import './fonts.css'
import './layout.css'
import globalTheme from './globalTheme.js'


export const Layout = ({ children, bg }) => {

  return (
    <ThemeProvider theme={globalTheme}>
      <Header />
      <Wrapper bg={bg}>
        {children}
      </Wrapper>
      <Footer />
    </ThemeProvider>

  )

}