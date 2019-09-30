import React, { Component } from "react";
//import ModalImage from "react-modal-image";
import Box from "../../components/Box";
import { Image, ImageWrap } from "./styles";
//import { CenterFocusStrong } from "styled-icons/material";
import Carousel, { Modal, ModalGateway } from 'react-images';
//import { getAltText } from './formatters';


class Gallery extends Component {
  state = {
    selectedIndex: 2,
    lightboxIsOpen: false,
  };
  toggleLightbox = (selectedIndex) => {
    this.setState(state => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedIndex,
    }));
    document.body.classList.add('modal-open');
  };
   closeLightbox = () => {
     this.setState(state=>({
      selectedIndex:0,
      lightboxIsOpen:false
     }))
     document.body.classList.remove('modal-open');
  };
render(){
  const {images,...rest} = this.props;
  
  const { selectedIndex, lightboxIsOpen } = this.state;
  return (
    <Box display="flex" flexWrap="wrap" {...rest} className="photo_video">
      {images.map((src, index) => (
        <ImageWrap className="gallery_div" key={index} width={[1, 1 / 3, 1 / 4]}>
          <Image 
          backgroundImage={`url(${src.src})`} 
          onClick={() => this.toggleLightbox(index)} 
           />
            {/* <ModalImage
              className="ReactModelImage"
              small={src}
              large={src}
              hideDownload={true}
              hideZoom={true}
             /> */}
    
        </ImageWrap>
      ))}

        <ModalGateway>
          {lightboxIsOpen  ? (
            <Modal onClose={this.closeLightbox}>
              <Carousel 
              // components={{ FooterCaption }}
               currentIndex={(typeof selectedIndex !=='undefined')?selectedIndex : 0}
               //formatters={{ getAltText }}
              // frameProps={{ autoSize: 'height' }}
              views={images.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
               />
            </Modal>
          ) : null}
        </ModalGateway>
    
    </Box>
  );
} 
}

export default Gallery;
