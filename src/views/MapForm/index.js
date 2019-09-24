import React from "react";

import Box from "../../components/Box";
import Heading from "../../components/Heading";
import Map from "../../components/Map/Home";
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
         {/* <Map/> */}
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
