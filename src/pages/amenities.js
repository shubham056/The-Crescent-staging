import React from "react";
import { Container } from "styled-bootstrap-grid";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Box from "../components/Box";
import Hero from "../components/Hero";
import Heading from "../components/Heading";
import Button from "../components/Button";

// Views
import CardSlider from "../views/CardSlider";

// Temp
import hero from "./temp/bg_place.jpg";
import sample1 from "./temp/social_2.png";
import sample2 from "./temp/social_3.png";
import sample3 from "./temp/social_1.png";
import sample4 from "./temp/social_4.png";
import sample5 from "./temp/social_1.png";
import { graphql } from "gatsby";

// Temp data
// const sliderData = [
//   {
//     src: sample1,
//     title: `Ascension Coffee`,
//     desc: `200 Crescent Court, Suite 40469.941.4542 Hours: Monday 7a.m. to 9 p.m., Tuesday – Friday 7 a.m. to 10 p.m., Saturday 8 a.m. to 10 p.m., Sunday 8 a.m. to 6 p.m. ascensiondallas.com Zagat rated, stylish coffeehouse serving premium slow-roasted coffee. Ascension Coffee offers a delicious menu for breakfast, lunch, dinner and wine.`,
//   },
//   {
//     src: sample1,
//     title: `Beau Nash`,
//     desc:`400 Crescent Court
//     214.871.3200
//     Hours: Sunday-Thursday 2 p.m. to 12 a.m., Friday-Saturday 1 p.m. to 1 a.m.
//     <a href="https://www.crescentcourt.com/dining/beau-nash" target="_blank">crescentcourt.com</a>
//     A popular cocktail spot, Beau's offers drinks, snacks and desserts with a dash of Uptown energy. Located in the Great Hall with soaring limestone columns and polished marble floors, Beau's is a relaxing spot to people and relax. The lounge offers an extensive drink selection with an array of premium wines by the glass`,
//   },
// ];

const Amenities = ({data}) => {
  const DineWithUs = data.allStrapiDinewithuses.edges.map(res=>{
    return{
          src:res.node.image.publicURL,
          title:res.node.heading,
          desc:res.node.description,
          address:res.node.address,
          time:res.node.time,
          website_name:res.node.website_name,
          url:res.node.website_url,
          phone_no:res.node.phone_no,
    };
  })
  const RetailAndHospitality = data.allStrapiRetalandhospitalities.edges.map(res=>{
    return{
          src:res.node.image.publicURL,
          title:res.node.heading,
          desc:res.node.description,
          address:res.node.address,
          time:res.node.time,
          website_name:res.node.website_name,
          url:res.node.website_url,
          phone_no:res.node.phone_no,
    };
  })
  //console.log(DineWithUs)
  console.log(DineWithUs)
 return(
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
        data={DineWithUs}
        onClick={() => console.log("test")}
      />
      <Heading fontSize={[4, "36px"]} pb={[5, "100px"]}>
        <span>Retail</span> and hospitality
      </Heading>
      <CardSlider
        mb={[4, "100px"]}
        data={RetailAndHospitality}
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
        The Crescent’s concierge service is pleased to assist you with information regarding hotels, restaurants, entertainment and any other needs you may have.   They can assist you with most ticket orders and requests via phone or email. For all orders that need to be delivered to the building, please order no later than 2 p.m. on Thursdays for delivery each Friday no later than noon. Tickets must be picked up in the management office (200 Crescent Court, Suite 250) no later than 4 p.m. on Friday.
        <br/>
        The concierge accepts all major credit cards, debit cards, and company checks. For more information call (972) 770-4045, email services@conciergeconnection.org, or for the full discount ticket listing, visit <a href="http://texasconciergeconnection.com" target="_blank" style={{color:"#fff"}}>www.texasconciergeconnection.com.</a> 
          {/* <Box as="a" color="white" href="http://texasconciergeconnection.com/">
            www.texasconciergeconnection.com
          </Box>. */}
          <p></p>
          <Button
          color="white"
          width={[1, "auto"]}
          mt={4}
          as="a"
          href="http://texasconciergeconnection.com"
          target="_blank"
        >
          The Crescent Concierge
         </Button>
        </Box>
      </Box>
    </Box>
  </Layout>
 );
}

export default Amenities;
export const PageQuery = graphql`
{
  allStrapiDinewithuses {
    edges {
      node {
        id
        heading
        description
        address
        phone_no
        time
        website_name
        website_url
        image {
          publicURL
        }
      }
    }
  }
  allStrapiRetalandhospitalities {
    edges {
      node {
        id
        heading
        description
        address
        phone_no
        time
        website_name
        website_url
        image {
          publicURL
        }
      }
    }
  }
}
`
