import React from "react";

import { Container } from "styled-bootstrap-grid";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Button from "../components/Button";
import Box from "../components/Box";
import Heading from "../components/Heading";
import AnchorLink from 'react-anchor-link-smooth-scroll'


// Compound
import ContentImage, { Content, Image } from "../compound/ContentImage";

// Views
import TeamList from "../views/TeamList";

// Temporary assets
import hero from "./temp/about_hero.jpg";
import ContentImageImage from "./temp/image_content_placeholder.jpg";
import thinkSustainable from "./temp/think_sustainable.jpg";
import thankYou from "./temp/thank_you.jpg";
import team from "./temp/the_team.jpg";
import kristine from "./temp/kristine_lang.png";
import amanda from "./temp/amanda_tucker.png";
import tony from "./temp/tony_click.png";
import rick from "./temp/rick_flusche.png";
import doug from "./temp/doug_cavaness.png";
import steve from "./temp/steve_benbrook.png";
import robert from "./temp/robert_reed.png";

// Temporary data
import DownloadBrochure from '../pages/temp/DownloadBrochure.pdf'
const teams = [
  {
    name: `<span>Julie</span> Young`,
    position: `General Manager`,
    email: `jyoung@crescent.com`,
    phone: `214.880.4508`,
  },
  {
    name: `<span>Kristine</span> Lang`,
    position: `Property Manager`,
    src: kristine,
    email: `klang@crescent.com`,
    phone: `214.880.4568`,
  },
  {
    name: `<span>Amanda</span> Tucker`,
    position: `Assistant Property Manager`,
    src: amanda,
    email: `atucker@crescent.com`,
    phone: `214.880.4504`,
  },
  {
    name: `<span>Tony</span> Click`,
    position: `Leasing`,
    src: tony,
    email: `tclick@crescent.com`,
    phone: `214.880.4766`,
  },
  {
    name: `<span>Rick</span> Flusche, RPA`,
    position: `Director of Operations`,
    src: rick,
    email: `rflusche@crescent.com`,
    phone: `214.880.4515`,
  },
  {
    name: `<span>Doug</span> Cavaness`,
    position: `Accounting Manager`,
    src: doug,
    email: `dcavaness@crescent.com`,
    phone: `214.880.4509`,
  },
  {
    name: `<span>Steve</span> Benbrook`,
    position: `Chief Engineer`,
    src: steve,
    email: `sbenbrook@crescent.com`,
    phone: `214.880.4516`,
  },
  {
    name: `<span>Robert</span> Reed`,
    position: `SR. Security Advisor`,
    src: robert,
    email: `rreed@crescent.com`,
    phone: `214.880.4516`,
  },
  {
    name: `<span>Marisa</span> Parkin`,
    position: `General Manager`,
    email: `Customer Relations Associate`,
    phone: `214.880.4514`,
  },
];

function About() {
  return (
    <Layout>
      <SEO title="About" />
      <Hero src={hero} />
      <Container>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          backgroundColor="white"
          py={5}
        >
          
          <Button
            px={5}
            width={[1, "auto"]}
            my={2}
            mx={[0, 2, 3]}
            as="a"
            href="#management"
          >
         <AnchorLink href='#management' style={{color:"#307EAF"}}>Management</AnchorLink>
          </Button>

          <Button
            px={5}
            width={[1, "auto"]}
            my={2}
            mx={[0, 2, 3]}
            as="a"
            href="#sustainability"
          >
         <AnchorLink href='#sustainability' style={{color:"#307EAF"}}>Sustainability</AnchorLink>
          </Button>

          <Button
            px={5}
            width={[1, "auto"]}
            my={2}
            mx={[0, 2, 3]}
            as="a"
            href="#community"
          >
         <AnchorLink href='#community' style={{color:"#307EAF"}}>Community</AnchorLink>
          </Button>

        </Box>
      </Container>
      <Box overflow="hidden">
        <ContentImage>
          <Image src={ContentImageImage} />
          <Content>
            <Heading as="h2" fontSize={[4, "36px"]}>
              The <span>Crescent</span>
            </Heading>
            <Box>
              The Crescent®, heralded as a celebration of art, history and
              architecture, is the most iconic building in Dallas. Designed by
              world renowned architect Philip Johnson along with John Burgee and
              Dallas-based Shepherd & Boyd, The Crescent’s facade creates a
              timeless design of quality and outstanding visibility from any
              point in the Dallas Central Business District. Known as the
              financial center of the southwest, the office and retail complex
              is the centerpiece of the Uptown Dallas/Turtle Creek Class AA
              office market. Amenities include twelve restaurants, luxury
              shopping, an art gallery, two salons, a spa and fitness center.
              The Crescent® is the only Uptown office building with a dual-feed
              power supply and the first office complex in Dallas to install
              innovative destination-dispatch elevators.
            </Box>
            <Button mt={4} as="a" 
            href={DownloadBrochure}
            target="_blank"
            >
              Download Brochure
            </Button>
          </Content>
        </ContentImage>
      </Box>
      <Container>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          backgroundColor="white"
          py={5}
        >
          <Heading as="h2" fontSize={[4, "36px"]}>
            Customer service{" "}
            <span>is our passion, our culture and our advantage</span>
          </Heading>
          <Box>
            The Crescent Real Estate management team is committed to providing
            exceptional customer service. As a result, we have been recognized
            ten times with the prestigious National Commercial Real Estate
            Customer Service Award for Excellence, or the “A List” Award, from
            CEL & Associates, Inc. The key to our success is our people, our
            relationships and interactions we have with our customers. It is
            this superior service, quality of assets, attention to detail and
            commitment to the customer experience that differentiates Crescent
            from our peers, giving us a competitive edge and making us the “Best
            in the Industry.”
          </Box>
        </Box>
      </Container>
      {/* <Box
        backgroundImage={`url(${team})`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        width={1}
        minHeight={[400, 800]}
      /> */}
      <div id="management">
      <Container >
        <Box py={5}>
          <Heading as="h2" mb={0} fontSize={[4, "36px"]}>
            Our <span>management</span> team
          </Heading>
        </Box>
      </Container>
      <TeamList teams={teams} />
      </div>
      
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
      <div id="sustainability">
      <Box overflow="hidden" mb={3} >
        <ContentImage>
          <Content className="about-content">
            <Heading as="h2" fontSize={[4, "36px"]}>
              Be responsible, <span>think sustainable</span>
            </Heading>
            <Box>
              <p>
                The Crescent® has been awarded LEED Silver certification from
                the U.S. Green Building Council (USGBC) under the Existing
                Buildings rating system. With a current score of 81, The
                Crescent has been an Energy Star labeled building since 2008.
                Factors such as building automation systems, lighting controls,
                and chilled water thermal storage have contributed to a
                significant decrease in the overall energy consumption. The
                replacement of all water closets with water-conserving, low-flow
                models, coupled with the implementation of comprehensive green
                cleaning and recycling programs, are just a few examples of The
                Crescent’s leadership in sustainability practices.
              </p>
              <p>
                The Crescent® is focused on providing a green building
                environment for our customers in order to demonstrate our
                commitment to becoming better stewards of the environment within
                the commercial real estate market.
              </p>
            </Box>
          </Content>
          <Image style={{backgroundPosition:"right center"}} src={thinkSustainable} />
        </ContentImage>
      </Box>
      <Box overflow="hidden" id="community">
        <ContentImage>
          <Image src={thankYou} />
          <Content className="about-content">
            <Heading as="h2" fontSize={[4, "36px"]}>
              Invested in <span>Our Community</span>
            </Heading>
            <Box>
              <p>
                The Crescent recognizes the importance of promoting healthy
                communities in which to live and work. The heart of Crescent’s
                commitment to the community is FACES of Change® a unique
                adopt-a-school program Crescent began in 1997. Through this
                program, Crescent properties are partnered with local elementary
                schools that serve at-risk students and families. FACES of
                Change partnerships bring Crescent employees, customers, and
                business partners together to provide volunteer time, financial
                and in-kind gifts to partner schools. Since its inception, FACES
                of Change has established more than 80 successful
                business-to-school partnerships that have impacted the lives of
                over 30,000 children nationwide.
              </p>
              <p>
                To learn more about The Crescent’s FACES of Change partnership
                with Paul L. Dunbar Learning Center or to volunteer, please
                contact Kristine Lang at{" "}
                <a href="tel:214.880.4568">214.880.4568</a> or{" "}
                <a href="mailto: klang@crescent.com">klang@crescent.com</a>.
              </p>
            </Box>
          </Content>
        </ContentImage>
      </Box>
      </div>
      
      <p></p>
    </Layout>
  );
}

export default About;
