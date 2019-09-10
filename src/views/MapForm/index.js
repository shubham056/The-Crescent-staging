import React from "react";

import Box from "../../components/Box";
import Heading from "../../components/Heading";
import {
  Input,
  SearchIcon,
  SDollar,
  SBuilding,
  SParking,
  SRestaurant,
  SCoffee,
  IconWrap,
} from "./styles";

function MapForm() {
  return (
    <Box display="flex" flexWrap="wrap">
      <Box p={[5, 6]} width={[1, null, 1 / 2]} bg="#F2F2F2">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.947406259614!2d-96.80610194973826!3d32.79365378087356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e99301189e493%3A0x3ca44e076ef3ef57!2s200%20Crescent%20Ct%2C%20Dallas%2C%20TX%2075201%2C%20USA!5e0!3m2!1sen!2sin!4v1568113371403!5m2!1sen!2sin" ></iframe>
      </Box>
      <Box p={[5, 6]} width={[1, null, 1 / 2]}>
        <Heading fontSize={[4, "36px"]} mb={3}>
          Search <span>Location</span>
        </Heading>
        <Box position="relative" maxWidth={670}>
          <Input />
          <SearchIcon size="1.5rem" />
        </Box>
        <Box my={4}>
          Use the search box above to find local area amenities (e.g.
          restaurants, etc.) or click below for specific select.
        </Box>
        <Box>
          <IconWrap>
            <SDollar />
            <div>Banks and ATM’s</div>
          </IconWrap>
          <IconWrap>
            <SBuilding />
            <div>Hotel</div>
          </IconWrap>
          <IconWrap>
            <SParking />
            <div>Parking</div>
          </IconWrap>
          <IconWrap>
            <SRestaurant />
            <div>Restaurant</div>
          </IconWrap>
          <IconWrap>
            <SCoffee />
            <div>Coffee</div>
          </IconWrap>
        </Box>
      </Box>
    </Box>
  );
}

export default MapForm;
