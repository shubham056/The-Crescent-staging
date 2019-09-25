import React,{Component} from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Modal from "react-responsive-modal";
import Hero from "../../components/Hero";
import hero from "../../pages/temp/component.png";
import Button from "../../components/Button";

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

class Header extends Component{
  //const [open, set] = useState(false);
  state = {
    open: false,
    openModel: false,
    Modeltitle:null,
    content: null,
    Modelimage:null
  };
  onOpenModal = (ev) => {
    this.setState({ openModel: true });
    this.setState({content: ev.currentTarget.dataset.content})
    this.setState({Modeltitle: ev.currentTarget.dataset.title})

  };

  onCloseModal = () => {
    this.setState({ openModel: false });
  };
  render(){
    const { openModel } = this.state;
  return (
    <Box
      bg={this.state.open ? `primary` : `white`}
      width={1}
      height={this.state.open ? `100vh` : `100px`}
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

       <Modal open={openModel} onClose={this.onCloseModal} className="mod">
        <Container>
              <Row>
                <Col col={6} md={6} >
                <Hero src={hero} className="map_img" />
                </Col>
                  <Col col={6} md={6} className="text-area">
                    <div className="inner-txt">
                      <h2> {this.state.Modeltitle}</h2>
                      <div className="content_new">{this.state.content}</div >
                      <div>
                      <Button
                          px={5}
                          width={[1, "auto"]}
                          my={2}
                          mx={[0, 3]}
                          as="a"
                          href="#"
                          className="parking_button"
                        >
                          Office Parking
                      </Button>
                      </div>
                      <div>
                      <Button
                          px={5}
                          width={[1, "auto"]}
                          my={2}
                          mx={[0, 3]}
                          as="a"
                          href="#"
                          className="parking_button"
                        >
                        Valet Parking
                      </Button>
                      </div>
                    </div>
                    </Col>
            </Row>
          </Container>
        </Modal>

          <Link to="/">
            <Box as="svg" width="240px" viewBox="0 0 471 55">
              <LogoPath open={this.state.open} />
            </Box>
          </Link>
          <Box display={["none", null, "block"]}>
            <Social>
              <SocialItem href="https://www.facebook.com/TheCrescentDallas/" target="_blank">
                <StyledFacebookF color={this.state.open ? `white` : `primary`} />
              </SocialItem>
              <SocialItem href="https://www.instagram.com/thecrescentdallas" target="_blank">
                <StyledInstagram color={this.state.open ? `white` : `primary`} />
              </SocialItem>
              <SocialItem href="https://vimeo.com/channels/thecrescent" target="_blank">
                <StyledVimeoV color={this.state.open ? `white` : `primary`} />
              </SocialItem>
            </Social>
          </Box>
          <Box display="flex">
            <Box display={["none", null, "flex"]}>
              <Box mr={[null, 0, 4]}>
                <IconText>
                  <Icon>
                    <StyledUserTie color={this.state.open ? `white` : `primary`} />
                  </Icon>
                  <Text>
                    <Box color={this.state.open ? `white` : `grays.0`}>
                    <a style={{color:"#A7A9AC"}} href="https://www.ng1.angusanywhere.com/Tenant/default.aspx?CompanyName=69941&WebsiteName=Main" target="_blank">
                      Customer
                      <br />
                      service</a>
                    </Box>
                  </Text>
                </IconText>
              </Box>
              <Box mr={[null, 0, 5]}>
                <IconText>
                  <Icon>
                    <StyledParking color={this.state.open ? `white` : `primary`} />
                  </Icon>
                  <Text>
                    <Box color={this.state.open ? `white` : `grays.0`}>
                    <a style={{color:"#A7A9AC"}} href="#" 
                    //target="_blank"
                    data-title={"PARKING AT THE CRESCENT"} 
                    data-content={"The Crescent® is a unique, luxury, mixed-use development consisting of 1.1 million gross square feet of office space and 165,000 gross square feet in the atrium.  In one prestigious location, the finest office spaces, hotel accommodations, restaurants, spa, retail shops and services are available."} 
                    data-parkingButtons={true}
                    onClick={this.onOpenModal}
                    >
                      Parking
                      <br />
                      validation
                      </a>
                    </Box>
                  </Text>
                </IconText>
              </Box>
            </Box>
            <Hamburger open={this.state.open} onClick={() => this.setState({open:!this.state.open})}>
              <div />
            </Hamburger>
          </Box>
        </Box>
      </Container>
      <Menu open={this.state.open}>
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
          <A fontSize={[4, "36px"]} to="/news-2017">
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
            Corporate Policies
            </Privacy>        
            <Box color="white">©The Crescent. All Rights Reserved 2019</Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
  }
}

export default Header;
