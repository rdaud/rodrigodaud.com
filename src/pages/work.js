import * as React from "react"
import { Link } from "gatsby"
import { Layout, Container } from "../components/common"
import { Mosaic, Title } from "../components/work"



const WorkPage = () => {


  return (
    <Layout bg="orange">
        <Title />
        <Mosaic />
    </Layout>
  )
}

export default WorkPage
