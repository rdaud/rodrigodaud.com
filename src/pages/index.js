import * as React from "react"
import { Layout } from 'components/common'
import { Intro, Navigation } from "../components/landing"
import gsap from 'gsap'






const IndexPage = () => {

React.useEffect(() => {
  const intro = document.querySelector('.intro')
  const logo = document.querySelector('.logo')
  const contact = document.querySelector('.contact')
  const navigation = document.querySelector('.navigation')

  // setTimeout(() => {
  //   intro.classList.add('fade-out')
  
  // }, 2000)

  gsap.to(".intro", { y: 30, duration: 1});

  setTimeout(() => {
    intro.remove()
    logo.classList.add('reveal')
    contact.classList.add('reveal')
    navigation.classList.add('reveal')
  }, 3000)

  
},[])

  return (
   <Layout>
     <Intro className="intro" />
     <Navigation className="navigation"/>
   </Layout>
  )
}

export default IndexPage
