import React, { Component } from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import axios from 'axios';
import AnchorLink from 'react-anchor-link-smooth-scroll'



import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Box from "../components/Box";
import Hero from "../components/Hero";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { Video, Source } from "../components/Video";
import BGImage from "../components/BGImage";
// import instafeed from 'react-instafeed'

// Temporary
import bgPlace from "./temp/bg_place.jpg";
import videoSample from "./temp/sample_video.mp4";
import videoPlace from "./temp/video_place.jpg";
import social1 from "./temp/social_1.png";
import social2 from "./temp/social_2.png";
import social3 from "./temp/social_3.png";
import social4 from "./temp/social_4.png";
import hero from "./temp/home_hero.jpg";

class Index extends Component {
  handleClick() {
    console.log('this is:', this);
  }
  state = {
        images: [],
    };
    
componentDidMount() {
            let token = '3291087116.1677ed0.56579a3cefb642f98bf16d2555f4270b';
            let num_photos = 10;
            axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos)
                .then(res => {
                  this.setState({ images: res.data.data });
                  //console.log(this.state.images);
                })
                .catch(err => {
                    console.log(err)
                })
          }

  render(){
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
                href="#announcement"
              >
                <AnchorLink href='#announcement' style={{color:"#307EAF"}}>Announcement</AnchorLink>
              </Button>
            </Box>
          </Box>
        </Container>
        <Box
          backgroundImage={`url(${bgPlace})`}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          className="parallax_effect"
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
            <section id="announcement">  
            <Box  backgroundColor="rgba(48,126,175, 0.79)" py={[5, "90px"]}>
              <Container >
                <Row>
                  <Col col={12} xl={12}>
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
                          <Box mb={3}>
                            <Row>
                              <Col col={4}>Aug 19</Col>
                              <Col col={8}>
                                <Box href="/" as="a" fontWeight={700} color="white">
                                American Red Cross Blood Drive
                                </Box>
                              </Col>
                            </Row>
                          </Box>
                          <Box mb={3}>
                            <Row>
                              <Col col={4}>Sep 19</Col>
                              <Col col={8}>
                                <Box href="/" as="a" fontWeight={700} color="white">
                                Dallas Police Choir at the Crescent
                                </Box>
                              </Col>
                            </Row>
                          </Box>
                          <Box mb={3}>
                            <Row>
                              <Col col={4}>Sep 21</Col>
                              <Col col={8}>
                                <Box href="/" as="a" fontWeight={700} color="white">
                                Blood Drive
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
                        The Crescent’s concierge service is pleased to assist you with information regarding hotels, restaurants, entertainment and any other needs you may have.   They can assist you with most ticket orders and requests via phone or email. For all orders that need to be delivered to the building, please order no later than 2 p.m. on Thursdays for delivery each Friday no later than noon. Tickets must be picked up in the management office (200 Crescent Court, Suite 250) no later than 4 p.m. on Friday.
                        <br/>
                        The concierge accepts all major credit cards, debit cards, and company checks. For more information call (972) 770-4045, email services@conciergeconnection.org, or for the full discount ticket listing, visit <a href="http://texasconciergeconnection.com" target="_blank" style={{color:"#fff"}}>www.texasconciergeconnection.com.</a> 
                        </Box>
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
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Box>
            </section>
          </Box>
        </Box>
        <Video my={10} poster={videoPlace}>
          <Source src={videoSample} type="video/mp4" />
        </Video>
        <Container className="gal_container_heading">
          <Heading as="h2" mb={0} py={5} fontSize={[5, "36px"]}>
            <span>Get social</span> with us
          </Heading>
        </Container>
      
        <Box display="flex" flexWrap="wrap" p="6px" className="gal_container">
          {
            (this.state.images.length>0 ? 
              this.state.images.map(res=>{
                console.log(res)
                return(
                <a key={res.id} href={res.link} target="_blank" className="gal_card">
                   <BGImage className="gal_card_img" key={res.id} 
                    border="6px solid" 
                    borderColor="white" 
                    src={res.images.standard_resolution.url} 
                    />
                </a>
                )
                
              })
              :
              <>
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
                </>
              )
           
          }
          
        </Box>
      </Layout>
  )
}
}

export default Index;
