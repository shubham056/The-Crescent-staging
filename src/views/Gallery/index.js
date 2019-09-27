import React from "react";
import ModalImage from "react-modal-image";
import Box from "../../components/Box";
import { Image, ImageWrap } from "./styles";
import { CenterFocusStrong } from "styled-icons/material";

function Gallery({ images, ...rest }) {
 


  return (
    <Box display="flex" flexWrap="wrap" {...rest} className="photo_video">
      {images.map((src, index) => (
        <ImageWrap className="gallery_div" key={index} width={[1, 1 / 3, 1 / 4]}>
          {/* <Image 
          backgroundImage={`url(${src})`} 
           /> */}
            <ModalImage
              className="ReactModelImage"
              small={src}
              large={src}
              hideDownload={true}
              hideZoom={true}
             />
    
        </ImageWrap>
      ))}
    
    </Box>
  );
}

export default Gallery;
