import React from "react";
import styled from "styled-components";

const StyledWrap = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  user-select: none;
`;

const StyledIcon = styled.div`
  display: flex;
  font-size: 1.3rem;
  flex: none;
  margin-right: 8px;
`;

const StyledText = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

const IconText = props => (
  <StyledWrap onClick={props.onClick} {...props}>{props.children}</StyledWrap>
);
const Icon = props => <StyledIcon>{props.children}</StyledIcon>;
const Text = props => <StyledText>{props.children}</StyledText>;

export { IconText, Icon, Text };
