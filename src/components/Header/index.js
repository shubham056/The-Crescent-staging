import React, { useState } from "react";
import { Link } from "gatsby";
import { Container } from "styled-bootstrap-grid";

import Box from "../Box";
import { Social, SocialItem } from "../Social";
import { IconText, Icon, Text } from "./IconText";
import { Menu, Item, A } from "./Menu";
import {
  StyledFacebookF,
  StyledVimeoV,
  StyledInstagram,
  StyledParking,
  StyledUserTie,
  Hamburger,
  Privacy,
} from "./styles";

import LogoPath from "./LogoPath";

function Header() {
  const [open, set] = useState(false);
  return (
    <Box
      bg={open ? `primary` : `white`}
      width={1}
      height={open ? `100vh` : `100px`}
      position="fixed"
      top="0"
      left="0"
      zIndex={999}
      style={{
        overflow: "hidden",
        transition: "all 0.5s",
      }}
    >
      <Container>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pt="30px"
        >
          <Link to="/">
            <Box as="svg" width="240px" viewBox="0 0 471 55">
              <LogoPath open={open} />
            </Box>
          </Link>
          <Box display={["none", null, "block"]}>
            <Social>
              <SocialItem href="https://www.facebook.com/" target="_blank">
                <StyledFacebookF color={open ? `white` : `primary`} />
              </SocialItem>
              <SocialItem href="https://www.instagram.com/" target="_blank">
                <StyledInstagram color={open ? `white` : `primary`} />
              </SocialItem>
              <SocialItem href="https://www.vimeo.com/" target="_blank">
                <StyledVimeoV color={open ? `white` : `primary`} />
              </SocialItem>
            </Social>
          </Box>
          <Box display="flex">
            <Box display={["none", null, "flex"]}>
              <Box mr={[null, 0, 4]}>
                <IconText>
                  <Icon>
                    <StyledUserTie color={open ? `white` : `primary`} />
                  </Icon>
                  <Text>
                    <Box color={open ? `white` : `grays.0`}>
                      Customer
                      <br />
                      service
                    </Box>
                  </Text>
                </IconText>
              </Box>
              <Box mr={[null, 0, 5]}>
                <IconText>
                  <Icon>
                    <StyledParking color={open ? `white` : `primary`} />
                  </Icon>
                  <Text>
                    <Box color={open ? `white` : `grays.0`}>
                      Parking
                      <br />
                      validation
                    </Box>
                  </Text>
                </IconText>
              </Box>
            </Box>
            <Hamburger open={open} onClick={() => set(!open)}>
              <div />
            </Hamburger>
          </Box>
        </Box>
      </Container>
      <Menu open={open}>
        <Item>
          <A fontSize={[4, "36px"]} to="/about">
            About
          </A>
        </Item>
        <Item>
          <A fontSize={[4, "36px"]} to="/amenities">
            Amenities
          </A>
        </Item>
        <Item>
          <A fontSize={[4, "36px"]} to="/leasing">
            Leasing
          </A>
        </Item>
        <Item>
          <A fontSize={[4, "36px"]} to="/location">
            Location
          </A>
        </Item>
        <Item>
          <A fontSize={[4, "36px"]} to="/gallery">
            Gallery
          </A>
        </Item>
        <Item>
          <A fontSize={[4, "36px"]} to="/news">
            News
          </A>
        </Item>
      </Menu>
      <Box
        px={2}
        width={1}
        style={{ position: "absolute", bottom: 32, zIndex: -1 }}
      >
        <Container>
          <Box display="flex" flexWrap="wrap" justifyContent="space-between">
            <Privacy to="/privacy-policy" color="white">
              Privacy Policy
            </Privacy>
            <Box color="white">©The Crescent. All Rights Reserved 2019</Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Header;
