import React from "react";
import { Container } from "styled-bootstrap-grid";
import Tabs from 'react-responsive-tabs';
// IMPORTANT you need to include the default styles
import 'react-responsive-tabs/styles.css';
import renderHTML from 'react-render-html';
import AccordionItem from "../../src/components/AccordionItem";
import { graphql } from "gatsby";



// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Box from "../components/Box";
import Hero from "../components/Hero";
import Heading from "../components/Heading";
import Button from "../components/Button";

// Compound
import ContentImage, { Content, Image } from "../compound/ContentImage";
import Table, { THead, TBody, TH, TR, TD } from "../compound/Table";

// Temp
import hero from "./temp/hero_leasing.jpg";
import image from "./temp/content_image.jpg";
import LeasingBrochure from './temp/leasing_brochure.pdf'


const Leasing = ({data}) => {
  function getTabs() {
    return data.allStrapiLeasingspaces.edges.map((president, index) => ({
      //title : president.node.building_name
      title: president.node.building_name,
      getContent: () => renderHTML(president.node.contents),
      /* Optional parameters */
      key: index,
      tabClassName: 'tab',
      panelClassName: 'panel',
    }));
  }
  return(
  <Layout>
    <SEO title="Home" />
    <Hero src={hero} />
    <Box mt="10px">
      <ContentImage>
        <Image src={image} />
        <Content>
          <Box maxWidth={680}>
            <Heading fontSize={[4, "36px"]} mb={[3, "40px"]}>
              The <span>Perfect place</span> to office
            </Heading>
            <Box mb={[3, "40px"]}>
              Set in a crescent-shaped contour, The Crescent® is designed to
              allow customers to travel from building to building while
              remaining within a unified complex. The three towers are
              contiguous and offer a standard 22,000 square foot floor plan with
              an elevator core in each tower. Customers can expand vertically,
              as in traditional buildings, or horizontally, using each building
              as a 22,000 square foot module. Standard bay depths are 43-44 feet
              from the outside wall to the interior core. The planning module is
              10 feet allowing floors to be arranged to accommodate offices up
              to 20 feet deep. Finished ceiling heights are 9 feet on floors 2
              through 15, and 12 feet on floors 16 through 19. The ground floor
              has a 12-foot finished ceiling.
            </Box>
            <Button as="a" 
             href={LeasingBrochure} 
             target="_blank"
            >
              Download Brochure
            </Button>
          </Box>
        </Content>
      </ContentImage>
    </Box>
    <Container>
      <Box overflowY="auto" mt={[3, 4, 6]} mb={[5, 6]}>
      <Tabs 
        items={getTabs()} 
        showMore={false}
      />
      <div className="mobile_accordian">
          {
            data.allStrapiLeasingspaces.edges.map(es=>{
              return(
                <AccordionItem
                mb={3}
                title={es.node.building_name}
                content={es.node.contents}
              />
              )
            })
          }
      </div>
        {/* <Table width={1}>
          <THead>
            <TR>
              <TH>Building <br />100</TH>
              <TH bg="grays.0">Building <br />200</TH>
              <TH bg="grays.0">Building <br />300</TH>
              <TH bg="grays.0">Building <br />400</TH>
            </TR>
          </THead>
          <TBody>
            <TR bg="grays.2">
              <TD>FLOOR</TD>
              <TD>SUITE</TD>
              <TD>RSF</TD>
              <TD>FLOOR PLAN</TD>
            </TR>
            <TR bg="white">
              <TD>2nd</TD>
              <TD>Suite 200</TD>
              <TD>3,811</TD>
              <TD>Download</TD>
            </TR>
            <TR bg="grays.2">
              <TD>2nd</TD>
              <TD>Suite 200</TD>
              <TD>3,811</TD>
              <TD>Download</TD>
            </TR>
            <TR bg="white">
              <TD>5th</TD>
              <TD>Suite 200</TD>
              <TD>3,811</TD>
              <TD>Download</TD>
            </TR>
            <TR bg="grays.2">
              <TD>2nd</TD>
              <TD>Suite 200</TD>
              <TD>3,811</TD>
              <TD>Download</TD>
            </TR>
          </TBody>
        </Table> */}
      </Box>
    </Container>
    <Box
      bg="primary"
      mb={2}
      px={3}
      py={[5, 6]}
      display="flex"
      justifyContent="center"
    >
      <Box
        maxWidth={690}
        fontSize={[4, "36px"]}
        fontWeight={700}
        textAlign="center"
        color="white"
      >
        For leasing information, please contact: Tony Click 214.880.4766
      </Box>
    </Box>
  </Layout>
  )
      }

export default Leasing;
export const PageQuery = graphql`
  {
    allStrapiLeasingspaces {
      edges {
        node {
          id
          building_name
          contents
        }
      }
    }
  }
`