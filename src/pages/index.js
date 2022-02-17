import * as React from "react"
import { Layout } from 'components/common'
import { Intro, Posts, Navigation } from "../components/landing"


window.onload = () => {
  setTimeout(() => console.log('e'), 3000)
}



const IndexPage = () => {

React.useEffect(() => {
  const intro = document.querySelector('.intro')
  const logo = document.querySelector('.logo')
  const contact = document.querySelector('.contact')
  const navigation = document.querySelector('.navigation')



  setTimeout(() => {
    intro.classList.add('fade-out')
  
  }, 2000)
  setTimeout(() => {
    intro.remove()
    logo.classList.add('reveal')
    contact.classList.add('reveal')
    navigation.classList.add('reveal')
    // intro.remove()
  }, 3000)

  
},[])

  return (
   <Layout>
     <Intro className="intro" />
     {/* <Posts /> */}
     <Navigation className="navigation"/>
   </Layout>
  )
}

export default IndexPage
