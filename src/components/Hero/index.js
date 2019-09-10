import React from "react";
import Box from "../Box";

export default ({ src }) => (
  <Box
    width={1}
    height="100vh"
    backgroundImage={`url(${src})`}
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
  />
);
