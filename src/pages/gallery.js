import React from "react";
import { graphql } from "gatsby"
import { Container } from "styled-bootstrap-grid";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Box from "../components/Box";
import Heading from "../components/Heading";

// Views
import GalleryV from "../views/Gallery";

// Temporary assets
import hero from "./temp/hero_gallery.jpg";
import image1 from "./temp/social_1.png";
import image2 from "./temp/social_2.png";
import image3 from "./temp/social_3.png";
import image4 from "./temp/social_4.png";
const images = [
  image1,
  image2,
  image3,
  image4,
  image1,
  image2,
  image3,
  image4,
  image1,
  image2,
  image2,
  image3,
  image4,
  image1,
  image2
];

function Gallery({data}) {
  const newGallery = data.allStrapiGalleries.edges.map(res=>res.node.crescent_gallery.publicURL)
  return (
    <Layout>
      <SEO title="Location" />
      <Hero src={hero} />
      <Container>
        <Box py={[5, "100px"]}>
          <Heading fontSize={[4, "36px"]}>
            <span>Photo & Video</span> GAllery
          </Heading>
        </Box>
      </Container>
      <GalleryV  images={(typeof newGallery !== 'undefined' && newGallery.length > 0)?newGallery:images} p="5px" />
    
    </Layout>
  );
}

export default Gallery;

export const PageQuery = graphql`
  {
    allStrapiGalleries {
      edges {
        node {
          crescent_gallery {
            publicURL
          }
        }
      }
    }
  }
`