import React from "react";

import Box from "../../components/Box";
import AccordionItem from "../../components/AccordionItem";

function AwardsList({awards, ...rest }) {
  console.log(awards)
  return (
    <Box {...rest}>
      {awards.map(({ date, title, content }) => (
       <AccordionItem
       mb={3}
       date={date}
       title={title}
       content={content}
     />
      ))}
    </Box>
  );
}

export default AwardsList;
