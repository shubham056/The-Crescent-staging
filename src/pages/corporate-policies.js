import React from "react";
import { Container } from "styled-bootstrap-grid";
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import renderHTML from 'react-render-html';
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Box from "../components/Box";

const Leasing = ({data}) => {
    console.log(data.allStrapiCorporatepolicies.edges[0].node.id)
  return(
  <Layout>
    <SEO title="Corporate Policies" />
    <Container>
      <Box overflowY="auto" mt={[3, 4, 6]} mb={[5, 6]}>
        <h1 className="cp_title">Corporate Policies</h1>
        <Tabs defaultTab={data.allStrapiCorporatepolicies.edges[0].node.id} vertical className="vertical-tabs">
            <TabList>
                {
                    data.allStrapiCorporatepolicies.edges.map(res=>{
                        return(
                         <Tab tabFor={res.node.id}>{res.node.heading}</Tab>
                        )
                    })
                }
            </TabList>
            {
                data.allStrapiCorporatepolicies.edges.map(res=>{
                    return(
                        <TabPanel tabId={res.node.id}>
                          <p className="cp_desc">{renderHTML(res.node.content)}</p>
                        </TabPanel>
                    )
                })
            }
        </Tabs>

        <Tabs defaultTab={data.allStrapiCorporatepolicies.edges[0].node.id}  className="mobile-tabs vertical-tabs">
            <TabList>
                {
                    data.allStrapiCorporatepolicies.edges.map(res=>{
                        return(
                         <Tab tabFor={res.node.id}>{res.node.heading}</Tab>
                        )
                    })
                }
            </TabList>
            {
                data.allStrapiCorporatepolicies.edges.map(res=>{
                    return(
                        <TabPanel tabId={res.node.id}>
                          <p className="cp_desc">{renderHTML(res.node.content)}</p>
                        </TabPanel>
                    )
                })
            }
        </Tabs>

      </Box>
    </Container>
  </Layout>
  )
      }

export default Leasing;
export const query = graphql`
  {
    allStrapiCorporatepolicies {
      edges {
        node {
          id
          heading
          content
        }
      }
    }
  }
`