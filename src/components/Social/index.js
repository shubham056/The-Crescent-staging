import React from "react";
import styled from "styled-components";

const StyledSocial = styled.div`

`;

const StyledSocialItem = styled.a`
  align-items: center;
  
  justify-content: center;
  margin: 0 10px;
  width: 44px;
  height: 44px;
`;

const Social = props => <StyledSocial>{props.children}</StyledSocial>;
const SocialItem = props => (
  <StyledSocialItem {...props}>{props.children}</StyledSocialItem>
);

export { Social, SocialItem };
