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
import { graphql } from "gatsby";




// Temp data
const sliderData = [
  {
    src: sample1,
    title: `Ascension Coffee`,
    desc: `200 Crescent Court, Suite 40469.941.4542 Hours: Monday 7a.m. to 9 p.m., Tuesday – Friday 7 a.m. to 10 p.m., Saturday 8 a.m. to 10 p.m., Sunday 8 a.m. to 6 p.m. ascensiondallas.com Zagat rated, stylish coffeehouse serving premium slow-roasted coffee. Ascension Coffee offers a delicious menu for breakfast, lunch, dinner and wine.`,
  },
  {
    src: sample1,
    title: `Beau Nash`,
    desc:`400 Crescent Court
    214.871.3200
    Hours: Sunday-Thursday 2 p.m. to 12 a.m., Friday-Saturday 1 p.m. to 1 a.m.
    <a href="https://www.crescentcourt.com/dining/beau-nash" target="_blank">crescentcourt.com</a>
    A popular cocktail spot, Beau's offers drinks, snacks and desserts with a dash of Uptown energy. Located in the Great Hall with soaring limestone columns and polished marble floors, Beau's is a relaxing spot to people and relax. The lounge offers an extensive drink selection with an array of premium wines by the glass`,
  },
  {
    src: sample1,
    title: `East Hampton Sandwich Shop`,
    desc: `200 Crescent Court, Suite 100214.698.5108 Hours: Monday - Friday 7 a.m. to 8 p.m., Saturday – Sunday 8 a.m. to 3 p.m. <a href="https://www.ehsandwich.com/location/the-crescent" target="_blank">ehsandwich.com</a> A refined kitchen and caterer offering sandwiches, salads, beer, and wine, East Hampton Sandwich Co. is dedicated to handcrafted ingredients and quick, upscale service.`,
  },
  {
    src: sample1,
    title: `Moxie's Grill & Bar`,
    desc: `100 Crescent Court, Suite 140469.687.0050 Hours: Monday-Wednesday 11 a.m. to 12 a.m., Thursday-Saturday 11 a.m. to 2 a.m., Sunday 11 a.m. – 12 a.m. moxies.com Moxie's Dallas offers both a casual and cultivated feeling, perfect for enjoying house-made dishes and hand crafted cocktails. Offering one of the best burger and beer experiences in Uptown Dallas, the feature locally sourced beef and craft draft, in addition to globally inspired dishes.`,
  },
  {
    src: sample1,
    title: `Nobu`,
    desc: `400 Crescent Court 214.252.7000 Hours: Sunday-Thursday 6 p.m. to 10:00 p.m. Friday-Saturday 6 p.m. to 11:00 p.m.<a href="https://www.noburestaurants.com/dallas/home/" target="_blank">noburestaurants.com</a> Just off the lobby of Hotel Crescent Court sits Nobu, the world renowned Japanese restaurant recognized for pioneering a new style Japanese cuisine. Guests may linger in the cocktail lounge to watch chefs work their magic at the sushi bar, or enjoy their meal in the Rockwell Group designed dining room. Nobu’s Wine Room, Skylight Room and Outdoor Courtyard are also available for private functions.`,
  },
  {
    src: sample2,
    title: `Shake Shack`,
    desc: `2500 N. Pearl Street 214.983.1023 Hours: Sunday-Thursday 11 a.m. to 10 p.m., Friday-Saturday 11 a.m. to 11 p.m. shakeshack.com
    Shake Shack is the perfect spot to kick back with a delicious ShackBurger and local beer in a park-like setting. In addition to the Shack classics, the menu features the Dallas-exclusive Link Burger and a selection of frozen treats created specifically for the Shake Shack at The Crescent.`,
  },
  {
    src: sample4,
    title: `Sixty Vines`,
    desc: `500 Crescent Court 214.814.8463 Hours: Sunday 10 a.m. to 12 p.m., Monday- Thursday 11 a.m. to 11 p.m., Friday 11 a.m. to 12 a.m., Saturday 11 a.m. to 12 a.m. <a href="https://sixtyvines.com/location/uptown-dallas-tx" target="_blank">sixtyvines.com</a> Focus on food first, with cuisine inspired by the wine country and an open kitchen that delights every sense. Then, it’s time to experience a better way to enjoy wine: on tap and perfectly selected to complement each dish. `,
  },
  {
    src: sample3,
    title: `Starbucks`,
    desc: `400 Crescent Court 214.871.3200 Hours: Monday - Friday 6 a.m. to 5 p.m., Saturday - Sunday 7 a.m. to 1 p.m. <a href="https://www.crescentcourt.com/dining/starbucks-2" target="_blank">crescentcourt.com</a> Starbucks waits to meet the morning's caffeine quota. Guests can choose their favorite brew prepared by the highly trained and efficient baristas.`,
  },
  {
    src: sample5,
    title: `The Capital Grille`,
    desc: `500 Crescent Court, Suite 135214.303.0500 Hours: Tuesday - Thursday 11 a.m. to 10 p.m., Friday 11 a.m. to 11 p.m., Saturday 5p.m. to 11 p.m., Sunday 5 p.m. to 9 p.m., Monday 4 p.m. to 10 p.m. <a href="https://www.thecapitalgrille.com/locations/tx/dallas/dallas-uptown/8012" target="_blank">thecapitalgrille.com</a>Visit The Capital Grille and enjoy classic steakhouse fare such as the dry aged Porterhouse, creative seafood dishes like the Citrus Glazed Salmon, and an award-winning wine list that is sure to please. Private dining can accommodate up to 46 guests. `,
  },
];


const Amenities = ({data}) => {
  const DineWithUs = data.allStrapiDinewithuses.edges.map(res=>{
    return{
          src:res.node.image.publicURL,
          title:res.node.heading,
          desc:res.node.description
    };
  })
  const RetailAndHospitality = data.allStrapiDinewithuses.edges.map(res=>{
    return{
          src:res.node.image.publicURL,
          title:res.node.heading,
          desc:res.node.description
    };
  })
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
          The Crescent’s concierge service is pleased to assist you with information regarding hotels, restaurants, and entertainment. They can assist you with most ticket orders and requests via phone or email. For all orders that need to be delivered to the building, please order no later than 2 p.m. on Thursdays for delivery each Friday no later than noon. Tickets must be picked up in the management office (200 Crescent Court, Suite 250) no later than 4 p.m. on Friday. The concierge accepts all major credit cards, debit cards, and company checks. For more information call (972) 770-4045.
          {/* <Box as="a" color="white" href="http://texasconciergeconnection.com/">
            www.texasconciergeconnection.com
          </Box>. */}
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
        image {
          publicURL
        }
      }
    }
  }
  strapiRetalandhospitalities {
    id
    heading
    description
    image {
      publicURL
    }
  }
}
`
