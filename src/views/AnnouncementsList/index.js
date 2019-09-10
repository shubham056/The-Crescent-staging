import React from "react";

import Box from "../../components/Box";
import NewsItem, { Date, Title } from "../../components/NewsItem";

function AnnouncementList({ announcements, ...rest }) {
  return (
    <Box {...rest}>
      {announcements.map(({ id, date, title, url }) => (
        <NewsItem key={id} mb={3}>
          <Date>{date}</Date>
          <Title color="secondary" as="a" href={url}>
            {title}
          </Title>
        </NewsItem>
      ))}
    </Box>
  );
}

export default AnnouncementList;
