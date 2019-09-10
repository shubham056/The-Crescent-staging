import React from "react";

import Box from "../../components/Box";
import AccordionItem from "../../components/AccordionItem";

function AwardsList({ awards, ...rest }) {
  return (
    <Box {...rest}>
      <AccordionItem
        mb={3}
        date="Jul 19"
        title="AIA Dallas Design Honor Award"
        content={`<p>The Shake Shack project at The Crescent was recognized this month when The Beck Group received the AIA Dallas Design Honor Award for the project. The award recognizes outstanding work by Dallas architects, both in the metropolitan area and across the country, with the purpose of honoring the architects, clients, and consultants who work together to achieve design excellence.</p>`}
      />
      <AccordionItem
        mb={3}
        date="Jul 19"
        title="TEXO Distinguished Building Award"
        content={`<p>The Shake Shack project at The Crescent was recognized this month when The Beck Group received the AIA Dallas Design Honor Award for the project. The award recognizes outstanding work by Dallas architects, both in the metropolitan area and across the country, with the purpose of honoring the architects.</p>`}
      />
    </Box>
  );
}

export default AwardsList;
