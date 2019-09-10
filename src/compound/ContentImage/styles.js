import styled from "styled-components";

import Box from "../../components/Box";

export const Content = styled(Box)``;

export const Image = styled(Box)`
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  width: 100%;
`;

Image.defaultProps = {
  height: ["320px", "400px", "auto"],
  width: [1, null, 1 / 2],
};

Content.defaultProps = {
  p: [4, 5, 6],
  width: [1, null, 1 / 2],
};
