import React,{Component} from "react";
import {Link} from 'gatsby';
import renderHTML from 'react-render-html';
import Modal from "react-responsive-modal";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Hero from "../../components/Hero";

import hero from "../../pages/temp/kristine_lang.png";
import Box from "../../components/Box";
import NewsItem, { Date, Title } from "../../components/NewsItem";
import addreddIcon from '../../pages/temp/1.png'
import timeIcon from '../../pages/temp/2.jpg'
import calIcon from '../../pages/temp/3.png'

class AnnouncementList extends Component{
  state = {
    open: false,
    modelheading:null,
    content: null,
    Modeladdress: null,
    Modelimage:null,
    Modeldate:null,
    Modeltime:null,
    Modeltitle:null,
    Modelimage:null,
  };
  onOpenModal = (ev) => {
    this.setState({ open: true });
    this.setState({content: ev.currentTarget.dataset.content})
    this.setState({Modeldate: ev.currentTarget.dataset.date})
    this.setState({Modeltime: ev.currentTarget.dataset.time})
    this.setState({Modeladdress: ev.currentTarget.dataset.address})
    this.setState({Modeltitle: ev.currentTarget.dataset.title})
    this.setState({Modelimage: ev.currentTarget.dataset.image})
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <Box >
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
                  <p className="spacing_none"><img className="small_icons" src={calIcon}/> {this.state.Modeldate}</p>
                  <p className="spacing_none"><img className="small_icons" src={timeIcon}/> {this.state.Modeltime}</p>
                  </div>
                </Col>
            </Row>
          </Container>
        </Modal>
        
        {this.props.announcements.map(({ id, date, title, url,content,time,address,image }) => (
        <NewsItem key={id} mb={3}>
          <Date
            style={{cursor:"pointer",color:"#FFFFFF"}}
            data-content={content} 
            data-date={date} 
            data-time={time} 
            data-address={address} 
            data-title={title} 
            data-image={image}
            onClick={this.onOpenModal}
          >
          {date}
          </Date>
          <Title 
            color="white" 
            as="a" 
            style={{cursor:"pointer"}}
            data-content={content} 
            data-date={date} 
            data-time={time} 
            data-address={address} 
            data-title={title} 
            data-image={image} 
            onClick={this.onOpenModal}
          >
           {title}
          </Title>
        </NewsItem>
      ))}
      </Box>
    );
  }
}

// function AnnouncementList({ announcements, ...rest }) {
//   return (
//     <Box {...rest}>
//       {announcements.map(({ id, date, title, url }) => (
//         <NewsItem key={id} mb={3}>
//           <Date>{date}</Date>
//           <Title color="secondary" as="a" href={url}>
//             {/* <Icon color="primary">
//               <FileDownload size="1rem" />
//             </Icon> */}
//             <Link to={`announcements/Announcaterogies_${id}`}>{title}</Link> 
//           </Title>
//         </NewsItem>
//       ))}
//     </Box>
//   );
// }

export default AnnouncementList;
