import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Box from "../../components/Box";
import Heading from "../../components/Heading";
import Map from "../../components/Map/Home";
import {
  Input,
  SearchIcon,
  SDollar,
  SBuilding,
  SParking,
  SRestaurant,
  SCoffee,
  IconWrap,
} from "./styles";

function MapForm() {
  return (
    <Container>
      <Row>
        <Col md={6} bg="#F2F2F2">
          <Map/>
        </Col>
      <Col md={6} style={{paddingTop:"35px"}}>
        <Heading fontSize={[4, "36px"]} mb={3}>
            Search <span>Location</span>
          </Heading>
          <Box position="relative" maxWidth={670} className="int_search_box">
            <Input />
            <SearchIcon size="1.5rem" />
          </Box>
          <Box my={4}>
            Use the search box above to find local area amenities (e.g.
            restaurants, etc.) or click below for specific select.
          </Box>
          <Box>
            <IconWrap>
              <SDollar />
              <div>Banks and ATM’s</div>
            </IconWrap>
            <IconWrap>
              <SBuilding />
              <div>Hotel</div>
            </IconWrap>
            <IconWrap>
              <SParking />
              <div>Parking</div>
            </IconWrap>
            <IconWrap>
              <SRestaurant />
              <div>Restaurant</div>
            </IconWrap>
            <IconWrap>
              <SCoffee />
              <div>Coffee</div>
            </IconWrap>
          </Box>
        </Col>
        </Row>
    </Container>
  );
}

export default MapForm;
