import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Box from "../components/Box";
import Hero from "../components/Hero";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { Video, Source } from "../components/Video";
import BGImage from "../components/BGImage";
import instafeed from 'react-instafeed'

// Temporary
import bgPlace from "./temp/bg_place.jpg";
import videoSample from "./temp/sample_video.mp4";
import videoPlace from "./temp/video_place.jpg";
import social1 from "./temp/social_1.png";
import social2 from "./temp/social_2.png";
import social3 from "./temp/social_3.png";
import social4 from "./temp/social_4.png";
import hero from "./temp/home_hero.jpg";

const options = {
  accessToken: '8987997106.924f677.8555ecbd52584f41b9b22ec1a16dafb9',
  clientId: '924f677fa3854436947ab4372ffa688d',
  get: 'user', // popular, user
  locationId: null,
  resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
  sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  tagName: null,
  userId: 8987997106,
}


const Index = () => {
  return(
  <Layout>
    <SEO title="Home" />
    <Hero src={hero} />
    <Container>
      <Box py={[5, "100px"]}>
        <Heading
          as="h1"
          fontSize={[4, 6, null, "54px"]}
          mb={[3, 4]}
          textAlign="center"
        >
          An address of <span>true distinction</span>
        </Heading>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          backgroundColor="white"
        >
          <Button
            px={5}
            width={[1, "auto"]}
            my={2}
            mx={[0, 3]}
            as="a"
            href="/about"
          >
            About
          </Button>
          <Button
            px={5}
            width={[1, "auto"]}
            my={2}
            mx={[0, 3]}
            as="a"
            href="/leasing"
          >
            Leasing
          </Button>
          <Button
            px={5}
            width={[1, "auto"]}
            my={2}
            mx={[0, 3]}
            as="a"
            href="/announcement"
          >
            Announcement
          </Button>
        </Box>
      </Box>
    </Container>
    <Box
      backgroundImage={`url(${bgPlace})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
    >
      <Box backgroundColor="rgba(0,0,0,0.6)">
        <Container>
          <Box
            textAlign="center"
            color="white"
            fontSize={[4, "36px"]}
            lineHeight="1.1944444444"
            fontWeight={700}
            py={[5, 6]}
          >
            The Crescent® is a unique, luxury, mixed-use development consisting
            of 1.1 million gross square feet of office space and 165,000 gross
            square feet in The Courtyard. In one prestigious location, the
            finest office spaces, hotel accommodations, restaurants, spa, retail
            shops and services are available.
          </Box>
        </Container>
        <Box backgroundColor="rgba(48,126,175, 0.79)" py={[5, "90px"]}>
          <Container>
            <Row>
              <Col col={12} xl={10} xlOffset={1}>
                <Row>
                  <Col xl={5}>
                    <Heading
                      color="white"
                      fontSize={[4, "36px"]}
                      mb={[3, "40px"]}
                      lineHeight={1}
                    >
                      Announcements
                    </Heading>
                    <Box color="white" mb={5}>
                      <Box mb={3}>
                        <Row>
                          <Col col={4}>Jul 16</Col>
                          <Col col={8}>
                            <Box href="/" as="a" fontWeight={700} color="white">
                              Professional Head Shot Event
                            </Box>
                          </Col>
                        </Row>
                      </Box>
                      <Box mb={3}>
                        <Row>
                          <Col col={4}>Jul 19</Col>
                          <Col col={8}>
                            <Box href="/" as="a" fontWeight={700} color="white">
                              The Crescent Go Green Event
                            </Box>
                          </Col>
                        </Row>
                      </Box>
                    </Box>
                  </Col>
                  <Col xl={1}>
                    <Box
                      display={["none", null, null, "block"]}
                      borderLeft="1px solid"
                      borderColor="white"
                      height="100%"
                    />
                  </Col>
                  <Col xl={6}>
                    <Heading
                      color="white"
                      fontSize={[4, "36px"]}
                      mb={[3, "40px"]}
                      lineHeight={1}
                    >
                      Concierge
                    </Heading>
                    <Box color="white">
                    The Crescent’s concierge service is pleased to assist you with information regarding hotels, restaurants, and entertainment. They can assist you with most ticket orders and requests via phone or email. For all orders that need to be delivered to the building, please order no later than 2 p.m. on Thursdays for delivery each Friday no later than noon. Tickets must be picked up in the management office (200 Crescent Court, Suite 250) no later than 4 p.m. on Friday. The concierge accepts all major credit cards, debit cards, and company checks. For more information call (972) 770-4045.
                    </Box>
                    <Button
                      color="white"
                      width={[1, "auto"]}
                      mt={4}
                      as="a"
                      href="/crescent-concierge"
                    >
                      Crescent Concierge
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Box>
      </Box>
    </Box>
    <Video my={10} poster={videoPlace}>
      <Source src={videoSample} type="video/mp4" />
    </Video>
    <Container>
      <Heading as="h2" mb={0} py={5} fontSize={[5, "36px"]}>
        <span>Get social</span> with us
      </Heading>
    </Container>
   
    <Box display="flex" flexWrap="wrap" p="6px">
      <BGImage border="6px solid" borderColor="white" src={social1} />
      <BGImage border="6px solid" borderColor="white" src={social3} />
      <BGImage border="6px solid" borderColor="white" src={social4} />
      <BGImage border="6px solid" borderColor="white" src={social3} />
      <BGImage border="6px solid" borderColor="white" src={social1} />
      <BGImage border="6px solid" borderColor="white" src={social4} />
      <BGImage border="6px solid" borderColor="white" src={social2} />
      <BGImage border="6px solid" borderColor="white" src={social3} />
      <BGImage border="6px solid" borderColor="white" src={social4} />
      <BGImage border="6px solid" borderColor="white" src={social2} />
    </Box>
  </Layout>
  );
}

export default Index;
