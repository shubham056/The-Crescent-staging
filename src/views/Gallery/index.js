import React from "react";

import Box from "../../components/Box";
import { Image, ImageWrap } from "./styles";

function Gallery({ images, ...rest }) {
  return (
    <Box display="flex" flexWrap="wrap" {...rest}>
      {images.map((src, index) => (
        <ImageWrap key={index} width={[1, 1 / 3, 1 / 4]}>
          <Image backgroundImage={`url(${src})`} />
        </ImageWrap>
      ))}
    </Box>
  );
}

export default Gallery;
