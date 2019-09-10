import React from "react";
import Box from "../Box";

export default props => (
  <Box 
    bg="primary"
    width={[1, 1 / 2, 1 / 5]} 
    height={372}
    backgroundImage={`url(${props.src})`}
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    {...props} 
  />
);
