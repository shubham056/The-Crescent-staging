import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { graphql } from "gatsby";
import moment from 'moment';
import timezone from 'moment-timezone';

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

function News({data}) {
  const newsCategory = data.strapiNews.News.newscategories.map(res=>{
    return{
      id: res.id,
      date: moment(res.date).tz('America/Chicago').format('MMM D'),
      title: res.title,
      url: res.url,
}
  });
  const annoucementCategory = data.allStrapiAnnouncaterogies.edges.map(res=>{
    return{
      id: res.node.id,
      date: moment(res.node.date).tz('America/Chicago').format('MMM D'),
      title: res.node.title,
      url: res.node.url,
      content:res.node.content,
      time:res.node.time,
      address:res.node.address,
      image:res.node.image.publicURL
}
  });
  const awardCategory = data.strapiNews.Awards.awardscategories.map(res=>{
    return{
      date: moment(res.date).tz('America/Chicago').format('MMM D'),
      title: res.title,
      content: res.content,
}
  });
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
                      news={newsCategory}
                    />
                  </Col>
                  <Col xl={5}>
                    <Heading lineHeight="1" fontSize={[4, "36px"]} mb={4}>
                      <span>Announcements</span>
                    </Heading>
                    <AnnouncementList
                      mb={5}
                      announcements={annoucementCategory}
                    />
                  </Col>
                  <Col xl={7}>
                    <Heading lineHeight="1" fontSize={[4, "36px"]} mb={4}>
                      <span>Awards</span>
                    </Heading>
                    <AwardsList 
                    awards={awardCategory}
                    />
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
export const PageQuery = graphql`
  {
    strapiNews(year: {eq: "2017"}) {
      News {
        year
        newscategories {
          id
          date
          title
          url
          content
        }
      }
      Awards {
        id
        awardscategories {
          id
          date
          title
          url
          content
        }
      }
    }
    allStrapiAnnouncaterogies {
      edges {
        node {
          id
          date
          title
          url
          content
          time
          address
          image {
            id
            publicURL
          }
        }
      }
    }
  }
`