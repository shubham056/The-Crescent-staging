import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Box from "../components/Box";
import Heading from "../components/Heading";
import NavList from "../components/NavList";

// Views
import NewsList from "../views/NewsList";
import AnnouncementList from "../views/AnnouncementsList";
import AwardsList from "../views/AwardsList";

// Temporary assets
import hero from "./temp/hero_news.jpg";

function News() {
  return (
    <Layout>
      <SEO title="News" />
      <Hero src={hero} />
      <Box py={[5, "100px"]}>
        <Container>
          <Row>
            <Col col={3} md={2} xl={1}>
              <NavList
                height="100%"
                borderRight="1px solid"
                borderRightColor="grays.1"
                mb={[5, 0]}
                list={[
                  { id: 1, title: "2019" },
                  { id: 2, title: "2018" },
                  { id: 3, title: "2017" },
                  { id: 4, title: "2016" },
                  { id: 5, title: "2015" },
                  { id: 6, title: "2014" },
                  { id: 7, title: "2013" },
                  { id: 8, title: "2012" },
                ]}
              />
            </Col>
            <Col col={9} md={10} xl={11}>
              <Box pl={[0, 0, 3]}>
                <Row>
                  <Col xl={7}>
                    <Heading lineHeight="1" fontSize={[4, "36px"]} mb={4}>
                      <span>News</span>
                    </Heading>
                    <NewsList
                      mb={5}
                      news={[
                        {
                          id: 1,
                          date: "Jul 16",
                          title: "The Cresent Secures Four New Leases",
                          url: "https://www.google.com/",
                        },
                        {
                          id: 2,
                          date: "Jul 16",
                          title: "New Retail at The Crescent",
                        },
                      ]}
                    />
                  </Col>
                  <Col xl={5}>
                    <Heading lineHeight="1" fontSize={[4, "36px"]} mb={4}>
                      <span>Announcements</span>
                    </Heading>
                    <AnnouncementList
                      mb={5}
                      announcements={[
                        {
                          id: 1,
                          date: "Jul 16",
                          title: "The Cresent Secures Four New Leases",
                          url: "https://www.google.com/",
                        },
                        {
                          id: 2,
                          date: "Jul 16",
                          title: "New Retail at The Crescent",
                        },
                      ]}
                    />
                  </Col>
                  <Col xl={7}>
                    <Heading lineHeight="1" fontSize={[4, "36px"]} mb={4}>
                      <span>Awards</span>
                    </Heading>
                    <AwardsList />
                  </Col>
                </Row>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </Layout>
  );
}

export default News;
