import React from "react";
import renderHTML from 'react-render-html';


import Box from "../Box";
import Button from "../Button";

import { Img, Title, Desc } from "./styles";

function MediaCard({ src, title, desc, onClick, ...rest }) {
  return (
    <Box {...rest}>
      <Img as="img" src={src} />
      <Title color="primary">{title}</Title>
      <Desc>{renderHTML(desc)}</Desc>
      <Button onClick={onClick}>Read More</Button>
    </Box>
  );
}

export default MediaCard;
