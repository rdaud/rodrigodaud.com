import * as React from "react"
import { Link } from "gatsby"
import { Layout, Spacer } from "../components/common"
import { Mosaic, Title } from "../components/work"



const WorkPage = () => {


  return (
    <Layout>
      <Spacer large />
        <Mosaic />
    </Layout>
  )
}

export default WorkPage
