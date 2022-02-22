import React, { useState, useEffect } from "react"
import { Layout, Spacer } from 'components/common'
import { Intro, GraphicDesign, Purpose, Featured, Prototypes } from "../components/landing"


const IndexPage = () => {

  const [ loading, isLoading ] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      isLoading(false)
    },2000)
  },[])


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
