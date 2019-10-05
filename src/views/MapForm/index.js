import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Box from "../../components/Box";
import Heading from "../../components/Heading";
import Map from "../../components/Map/Map";
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

const searchResultDiv = {
      width: "100%",
      boxShadow: "0px 6px 12px 0px rgba(50, 50, 50, 0.5)",
      color:"#fff",
    }

    const searchHeader = {
      height: "26px",
      background: "#3677E6",
      paddingLeft:"10px"
    }

    const closeResult = {
      float: "right",
      padding: "4px 7px 2px",
      fontSize: "20px",
      lineHeight: "20px",
      fontWeight: "bold",
      textDecoration: "none",
      //color: "#fff"

    }

    const resultContent = {
      clear: "both",
      maxHeight: "472px",
      border: "1px solid #ccc",
      overflow: "auto",
      color:"#000",
      paddingLeft:"10px"
    }
    const resultHead = {
      display:"inline"
    }
    // const hiddenData = {
    //   display:"none"
    // }

class MapForm extends React.Component { 
  constructor( props ){
    super( props );
    this.state = {
      showResult:0,
      showInfo : 1,
      resultData : {"name":'',"address":''}
    }
  }
  getData = values => {
    let newData = [];
    newData['name'] = values.address_components[0].long_name;
    newData['address'] = values.formatted_address;
    this.setState({resultData:newData})
    this.setState({showResult:1})
  }
  hideResult = () => {
    this.setState({showResult:0})
  }
  render() {
  return (
    <Container>
      <Row>
        <Col md={6} bg="#F2F2F2">
          <Map
          google={this.props.google}
          center={{lat: 32.793560, lng: -96.804039}}
          height='480px'
          zoom={16}
          propertyName='The Crescent'
          sendData={(values)=>{this.getData(values)}}
        />
        </Col>
      <Col md={6} style={{paddingTop:"35px"}}>
          <Heading fontSize={[4, "36px"]} mb={3}>
            Search <span>Location</span>
          </Heading>
          <Box position="relative" maxWidth={670} className="int_search_box">
            <Input />
            <SearchIcon size="1.5rem" />
          </Box>
          {this.state.showResult?(
          <Box my={4} >
            <div style={searchResultDiv}>
              <div style={searchHeader}>
                <h4 style={resultHead}>Results</h4>
                <a href="javascript:void(0)" onClick={this.hideResult} style={closeResult} title="Close Results">×</a>
              </div>
              <div style={resultContent}>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <strong>{this.state.resultData.name}</strong>
                        <br/>
                        {this.state.resultData.address}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Box>):(
          <div>
          <Box my={4} >
            Use the search box above to find local area amenities (e.g.
            restaurants, etc.) or click below for specific select.
          </Box>
          
          <Box >
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
          </div>
          )}

        </Col>
        </Row>
    </Container>
  );
}
}

export default MapForm;
