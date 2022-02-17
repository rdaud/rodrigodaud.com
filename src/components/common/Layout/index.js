import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Header, Footer } from '../../theme'
import { Wrapper } from './styles.js'

import './fonts.css'
import './layout.css'
import globalTheme from './globalTheme.js'


export const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={globalTheme}>
      <Header />
      <Wrapper>
        {children}
      </Wrapper>
      {/* <Footer /> */}
    </ThemeProvider>

  )

}