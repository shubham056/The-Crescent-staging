import styled, { css } from "styled-components";

import Box from "../Box";

const emailPhone = css`
  align-items: center;
  display: flex;

  svg {
    color: ${props => props.theme.colors.primary};
    flex: none;
    width: 22px;
    margin-right: 12px;
  }
`;

export const Image = styled(Box)`
  height: 370px;
  width: 100%;
  object-fit: cover;
`;

export const Position = styled(Box)`
  text-transform: uppercase;
`;

export const Email = styled(Box)`
  ${emailPhone};
`;

export const Phone = styled(Box)`
  ${emailPhone};
`;

Image.defaultProps = {
  as: "img",
};

Email.defaultProps = {
  as: "a",
};

Phone.defaultProps = {
  as: "a",
};
