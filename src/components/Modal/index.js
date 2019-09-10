import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

// Hooks
import usePortal from "../../utils/usePortal";

import Box from "../Box";

import { modalContent } from "./styles";

const StyledModalContent = styled(Box)`${modalContent}`;

function ModalContent({ children, ...rest }) {
  return <StyledModalContent {...rest}>{children}</StyledModalContent>;
}

function Modal({ id, children }) {
  const target = usePortal(id);
  return createPortal(children, target);
}

export { ModalContent };
export default Modal;
