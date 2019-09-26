import React,{Component} from "react";
import renderHTML from 'react-render-html';
import Modal from "react-responsive-modal";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Hero from "../../components/Hero";
import addreddIcon from '../../pages/temp/1.png'
import callIcon from '../../pages/temp/call.jpg'
import urlIcon from '../../pages/temp/url.jpg'
import timeIcon from '../../pages/temp/2.jpg'




import Box from "../Box";
import Button from "../Button";

import { Img, Title, Desc } from "./styles";

class MediaCard extends Component{
  state = {
    open: false,
    modelheading:null,
    content: null,
    Modeladdress: null,
    Modelurl:null,
    Modelphoneno:null,
    Modeltime:null,
    Modeltitle:null,
    Modelimage:null,
  };
  onOpenModal = (ev) => {
    this.setState({ open: true });
    this.setState({content: renderHTML(ev.currentTarget.dataset.content)})
    this.setState({Modelurl: ev.currentTarget.dataset.url})
    this.setState({Modeltime: ev.currentTarget.dataset.time})
    this.setState({Modelphoneno: ev.currentTarget.dataset.phoneno})
    this.setState({Modeladdress: ev.currentTarget.dataset.address})
    this.setState({Modeltitle: ev.currentTarget.dataset.title})
    this.setState({Modelimage: ev.currentTarget.dataset.image})

  };
  onCloseModal = () => {
    this.setState({ open: false });
  };
  render(){
    const { open } = this.state;
    const { src,title,desc,address,time,url,phone_no,fulldesc,fulltitle,...rest} = this.props;
    return(
      <Box {...rest} >
      <Modal open={open} onClose={this.onCloseModal} className="mod">
        <Container>
              <Row>
              <Col col={6} md={6} >
              <Hero src={this.state.Modelimage} />
              </Col>
          <Col col={6} md={6} className="text-area">
            <div className="inner-txt">
              <h2> {this.state.Modeltitle}</h2>
              <div className="content_new">{this.state.content}</div >
              <p className="spacing_none"><img className="small_icons" src={addreddIcon}/> {this.state.Modeladdress}</p>
              <p className="spacing_none"><img className="small_icons"  src={urlIcon}/> <a className="newlink" href={this.state.Modelurl} target="_blank">{this.state.Modelurl}</a></p>
              <p className="spacing_none"><img className="small_icons" src={timeIcon}/> {this.state.Modeltime}</p>
              <p className="spacing_none"><img className="small_icons" src={callIcon}/> {this.state.Modelphoneno}</p>
              </div>
            </Col>
            </Row>
          </Container>
        </Modal>
       <Img as="img" src={src} />
       <Title color="primary">{title}</Title>
       <Desc>{renderHTML(desc)}</Desc>
       <ul className="dyne_with_us">
         <li>
         <img className="" src={addreddIcon}/> {address}
         </li>
         <li>
         <img className=""  src={urlIcon}/> 
         <a className="newlink" href={this.state.Modelurl} target="_blank">
         {url}
         </a>
         </li>
         <li>
         <img className="" src={timeIcon}/> {time}
         </li>
         <li>
         <img className="" src={callIcon}/> {phone_no}
         </li>
       </ul>
       <Button
       data-content={fulldesc} 
       data-url={url} 
       data-phoneno={phone_no} 
       data-time={time} 
       data-address={address} 
       data-title={fulltitle} 
       data-image={this.props.src} 
       onClick={this.onOpenModal}
       >
         Read More
         </Button>
     </Box>
    )
  }
}

// function MediaCard({ src, title, desc, onClick, ...rest }) {
//   return (
//     <Box {...rest}>
//       <Img as="img" src={src} />
//       <Title color="primary">{title}</Title>
//       <Desc>{renderHTML(desc)}</Desc>
//       <Button onClick={onClick}>Read More</Button>
//     </Box>
//   );
// }

export default MediaCard;
