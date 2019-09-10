import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Container } from "styled-bootstrap-grid";

import Box from "../Box";
import { Social, SocialItem } from "../Social";
import {
  StyledLink,
  StyledFacebookF,
  StyledVimeoV,
  StyledInstagram,
} from "./styles";

import logoIconWhite from "./logo_icon_type.svg";
import logoWhite from "./logo_white.svg";

const Footer = ({ siteTitle, nav }) => {
  return (
    <Box as="footer">
      <Box bg="secondary" py={5}>
        <Container>
          <Box
            display={[null, null, "flex"]}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box width={[220, 220, 180]} mb={[4, null, 0]}>
              <Link to="/" style={{ display: "inline-block" }}>
                <Box width={1} as="img" src={logoWhite} alt={siteTitle} />
              </Link>
            </Box>
            <Box as="ul" p={0} m={0} display={[null, "flex"]}>
              {nav.map(item => (
                <Box
                  key={item.slug}
                  as="li"
                  style={{ listStyle: "none" }}
                  px={[null, 2, 3]}
                >
                  <StyledLink color="white" to={`/${item.slug}`}>
                    {item.text}
                  </StyledLink>
                </Box>
              ))}
            </Box>
            <Box width={[210, 210, 180]} mt={[4, null, 0]}>
              <Link to="/" style={{ display: "inline-block" }}>
                <Box width={1} as="img" src={logoIconWhite} alt={siteTitle} />
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box py={4}>
        <Container>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Box>
              {/* <StyledLink color="grays.0" to="/http://www.thecrescent.com/corporate-policies">
               Corporate Policies
              </StyledLink> */}
               <a className="eeMRgc" target="_blank" href="http://www.thecrescent.com/corporate-policies"  style={{color:"#A7A9AC"}}>
            Corporate Policies
            </a>
            </Box>
            <Box>
              <Social>
                <SocialItem href="https://www.facebook.com/TheCrescentDallas/" target="_blank">
                  <StyledFacebookF color="grays.1" />
                </SocialItem>
                <SocialItem href="https://www.instagram.com/thecrescentdallas" target="_blank">
                  <StyledInstagram color="grays.1" />
                </SocialItem>
                <SocialItem href="https://vimeo.com/channels/thecrescent" target="_blank">
                  <StyledVimeoV color="grays.1" />
                </SocialItem>
              </Social>
            </Box>
            <Box color="grays.0">
              © {siteTitle}. All Rights Reserved {new Date().getFullYear()}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
