import { css } from "styled-components";

export const modalContent = css`
  background-color: ${props => props.theme.colors.white};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
`;