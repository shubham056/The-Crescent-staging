import React from "react";

import Box from "../../components/Box";
import TeamCard from "../../components/TeamCard";

function TeamList({ teams, ...rest }) {
  return (
    <Box {...rest} display="flex" flexWrap="wrap" px="5px">
      {teams.map(({ name, position, src, email, phone }) => (
        <TeamCard
          width={[1, 1/2, 1/5]}
          px={["16px", "5px"]}
          pb={["30px", "60px"]}
          key={name}
          name={name}
          position={position}
          src={src}
          email={email}
          phone={phone}
        />
      ))}
    </Box>
  );
}

export default TeamList;
