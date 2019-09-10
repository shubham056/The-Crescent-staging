import React from "react";
import { Container } from "styled-bootstrap-grid";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Box from "../components/Box";
import Hero from "../components/Hero";
import Heading from "../components/Heading";

// Views
import CardSlider from "../views/CardSlider";

// Temp
import hero from "./temp/bg_place.jpg";
import sample1 from "./temp/social_2.png";
import sample2 from "./temp/social_3.png";
import sample3 from "./temp/social_1.png";
import sample4 from "./temp/social_4.png";
import sample5 from "./temp/social_1.png";

// Temp data
const sliderData = [
  {
    src: sample1,
    title: `Nobu`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vivamus vel sagittis nisi, eu fringilla orci. Vestibulum ut tincidunt sapien. 
    Nulla a vehicula lorem. Nulla urna.`,
  },
  {
    src: sample2,
    title: `The Conservatory`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vivamus vel sagittis nisi, eu fringilla orci. Vestibulum ut tincidunt sapien. 
    Nulla a vehicula lorem. Nulla urna.`,
  },
  {
    src: sample4,
    title: `Beau Nash`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vivamus vel sagittis nisi, eu fringilla orci. Vestibulum ut tincidunt sapien. 
    Nulla a vehicula lorem. Nulla urna.`,
  },
  {
    src: sample3,
    title: `The Conservatory`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vivamus vel sagittis nisi, eu fringilla orci. Vestibulum ut tincidunt sapien. 
    Nulla a vehicula lorem. Nulla urna.`,
  },
  {
    src: sample5,
    title: `Crescent`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vivamus vel sagittis nisi, eu fringilla orci. Vestibulum ut tincidunt sapien. 
    Nulla a vehicula lorem. Nulla urna.`,
  },
];

const Amenities = () => (
  <Layout>
    <SEO title="Home" />
    <Hero src={hero} />
    <Container>
      <Box
        py={[5, 6]}
        fontSize={[3, "36px"]}
        color="grays.0"
        textAlign="center"
        fontWeight={700}
      >
        The Crescent is Dallas’ premiere office and retail complex. In one
        prestigious location, the finest office spaces, hotel accommodations,
        spa, restaurants, retail shops and services are available. Unique indoor
        and outdoor gathering spaces can be found throughout The Courtyard for
        relaxing or meeting with friends and colleagues. Along with a walkable,
        neighborhood-friendly Uptown location, The Crescent provides convenient
        access to downtown Dallas, Klyde Warren Park, Dallas Arts District and
        Katy Trail.
      </Box>
      <Heading fontSize={[4, "36px"]} pb={[5, "100px"]}>
        <span>Dine</span> With Us
      </Heading>
      <CardSlider
        mb={[4, "100px"]}
        data={sliderData}
        onClick={() => console.log("test")}
      />
      <Heading fontSize={[4, "36px"]} pb={[5, "100px"]}>
        <span>Retail</span> and hospitality
      </Heading>
      <CardSlider
        mb={[4, "100px"]}
        data={sliderData}
        onClick={() => console.log("test")}
      />
    </Container>
    <Box
      bg="primary"
      my={2}
      px={3}
      py={[5, 6]}
      display="flex"
      justifyContent="center"
    >
      <Box maxWidth={1024} color="white">
        <Box as="h2" mt={0} fontSize={[4, "36px"]}>CONCIERGE</Box>
        <Box as="p">
          The Crescent’s concierge service is pleased to assist you with
          information regarding hotels, restaurants, and entertainment. They can
          assist you with most ticket orders and requests via phone or email.
          For all orders that need to be delivered to the building, please order
          no later than 2 p.m. on Thursdays for delivery each Friday no later
          than noon. Tickets must be picked up in the management office (200
          Crescent Court, Suite 250) no later than 4 p.m. on Friday. The
          concierge accepts all major credit cards, debit cards, and company
          checks. For more information call (972) 770-4045, email
          services@conciergeconnection.org, or for the full discount ticket
          listing, visit{" "}
          <Box as="a" color="white" href="http://texasconciergeconnection.com/">
            www.texasconciergeconnection.com
          </Box>.
        </Box>
      </Box>
    </Box>
  </Layout>
);

export default Amenities;
