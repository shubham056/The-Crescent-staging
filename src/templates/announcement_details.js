import React from 'react'
import { Container, Row, Col } from "styled-bootstrap-grid";
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from "../components/Hero";
import Box from "../components/Box";
// Temporary assets
import hero from "../pages/temp/hero_news.jpg";
 

const AnnouncementTemplate = ({ data }) => {
  return(
    <Layout>
    <Hero src={hero} />
     {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
     <Box py={[5, "50px"]}>
     <Container>
     {data.strapiAnnouncaterogies.content}
     </Container>
     </Box>
 </Layout>
   
);
  }

export default AnnouncementTemplate

export const query = graphql`
  query AnnouncementTemplate($id: String!) {
    strapiAnnouncaterogies(id: {eq: $id}) {
      id
      content
    }
  }
`

