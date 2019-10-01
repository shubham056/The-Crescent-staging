import React from "react";

import { Container } from "styled-bootstrap-grid";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Box from "../components/Box";



// Views
import MapForm from "../views/MapForm";

// Temporary assets
import hero from "./temp/location.jpg";

function Location() {
  return (
    <Layout>
      <SEO title="Location" />
      <Hero src={hero} />
      <Container>
        <Box
          py={[5, 6]}
          fontSize={[3, "36px"]}
          color="grays.0"
          textAlign="center"
          fontWeight={700}
        >
          The Crescent is a landmark in Dallas' high-profile Uptown neighborhood bringing its premier office, retail and restaurant experience to a walkable environment filled with high-rise residential living, world-class restaurants and entertainment, luxury hotels and a wide range of retail amenities. The Uptown location provides a perfect live-work-play environment. The location also provides convenient access to downtown Dallas, Klyde Warren Park, and the Dallas Arts District.
        </Box>
      </Container>
      <MapForm />
      <Box
        bg="primary"
        my={2}
        px={3}
        py={[5, 6]}
        display="flex"
        justifyContent="center"
      >
        <Box
          maxWidth={844}
          fontSize={[4, "36px"]}
          fontWeight={700}
          textAlign="center"
          color="white"
        >
          200 Crescent Court, Suite 250 Dallas Texas 75201 214.880.4500
         
        </Box>
      </Box>
    </Layout>
  );
}

export default Location;
