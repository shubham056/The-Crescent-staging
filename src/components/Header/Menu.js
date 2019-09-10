import styled from "styled-components";
import { Link } from "gatsby";
import { typography } from "styled-system";

export const Menu = styled.ul`
  list-style: none;
  padding: 16px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 1.5s;
  opacity: 0;
  z-index: -1;
  ${({ open }) => open && `opacity: 1`};
`;

export const Item = styled.li`
  margin: 24px 0;
`;

export const A = styled(Link)`
  ${typography};
  color: ${props => props.theme.colors.white};
  display: block;
  font-weight: 700;
  text-align: center;
`;

A.defaultProps = {
  fontSize: 4,
};
