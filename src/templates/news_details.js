import React from 'react'
import { Container, Row, Col } from "styled-bootstrap-grid";
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from "../components/Hero";
import Box from "../components/Box";
import renderHTML from 'react-render-html';
// Temporary assets
import hero from "../pages/temp/hero_news.jpg";
 

const NewsTemplate = ({ data }) => {
  return(
    <Layout>
    <Hero src={hero} />
     {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
     <Box py={[5, "50px"]}>
     <Container className="news-detail">
     {renderHTML(data.strapiNewscategories.content)}
     </Container>
     </Box>
 </Layout>
);
  }

export default NewsTemplate

export const query = graphql`
  query NewsTemplate($id: String!) {
    strapiNewscategories(id: {eq: $id}) {
      id
      content
    }
  }
`

