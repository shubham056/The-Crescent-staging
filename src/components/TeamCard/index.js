import React from "react";
import { Envelope } from "styled-icons/fa-solid/Envelope";
import { PhoneAlt } from "styled-icons/fa-solid/PhoneAlt";

import Box from "../Box";
import Heading from "../Heading";

import noImage from "./no_image.png";

import { Image, Position, Email, Phone } from "./styles";

function TeamCard({ name, position, email, phone, src, ...rest }) {
  return (
    <Box {...rest}>
      <Image mb={4} src={src ? src : noImage} />
      <Heading
        fontSize="24px"
        mb={0}
        style={{ textTransform: "capitalize" }}
        dangerouslySetInnerHTML={{ __html: name }}
      />
      <Position mb={3} color="grays.0">
        {position}
      </Position>
      <Email mb={2} color="secondary" href={`mailto:${email}`}>
        <Envelope /> {email}
      </Email>
      <Phone color="secondary" href={`tel:${phone}`}>
        <PhoneAlt /> {phone}
      </Phone>
    </Box>
  );
}

export default TeamCard;
