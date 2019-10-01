import React from "react";
import styled from "styled-components";

const StyledWrap = styled.div`
  align-items: center;
  cursor: pointer;

  user-select: none;
`;

const StyledIcon = styled.div`
  
  font-size: 1.3rem;
  margin-right: 8px;
  float:left;
  width:auto;
`;

const StyledText = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  float:left;
  width:auto;
`;

const IconText = props => (
  <StyledWrap onClick={props.onClick} {...props}>{props.children}</StyledWrap>
);
const Icon = props => <StyledIcon>{props.children}</StyledIcon>;
const Text = props => <StyledText>{props.children}</StyledText>;

export { IconText, Icon, Text };
