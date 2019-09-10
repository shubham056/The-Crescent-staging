import React from "react";
import { FileDownload } from "styled-icons/fa-solid/FileDownload";

import Box from "../../components/Box";
import NewsItem, { Date, Title, Icon } from "../../components/NewsItem";

function NewsList({ news, ...rest }) {
  return (
    <Box {...rest}>
      {news.map(({ id, date, title, url }) => (
        <NewsItem key={id} mb={3}>
          <Date>{date}</Date>
          <Title color="secondary" as="a" href={url}>
            <Icon color="primary">
              <FileDownload size="1rem" />
            </Icon>
            {title}
          </Title>
        </NewsItem>
      ))}
    </Box>
  );
}

export default NewsList;
