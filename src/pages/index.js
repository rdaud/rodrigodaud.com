import React, { useState, useEffect } from "react"
import { Layout, Spacer } from 'components/common'
import { Intro, GraphicDesign, Purpose, Featured, Prototypes } from "../components/landing"
import gsap from 'gsap'



const IndexPage = () => {

  const [ loading, isLoading ] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      isLoading(false)
    },2000)
  },[])



// React.useEffect(() => {
//   // const intro = document.querySelector('.intro')
//   // const logo = document.querySelector('.logo')
//   // const contact = document.querySelector('.contact')
//   // const navigation = document.querySelector('.navigation')

//   // // setTimeout(() => {
//   // //   intro.classList.add('fade-out')
  
//   // // }, 2000)
//   // console.log('teste')
//   // setTimeout(() => {
//   //   // intro.remove()
//   //   logo.classList.add('reveal')
//   //   contact.classList.add('reveal')
//   //   navigation.classList.add('reveal')
//   // }, 3000)

  
// },[])

  return (
    <>
   
      <Layout>
        <Spacer large />
        <Spacer large />
          <Intro />
        <Spacer large />
        <Spacer large />
        <Spacer large />
          <Purpose />
        <Spacer large />
        <Spacer large />
        <Spacer large />
          <Featured />
        <Spacer large />
        <Spacer large />
          <Prototypes />
        <Spacer large />
        <Spacer large />
          <GraphicDesign />
        <Spacer large />
        <Spacer large />
        <Spacer large />
        <Spacer large />
        {/* <Navigation/> */}
      </Layout>
     
   
   </>
  )
}

export default IndexPage
