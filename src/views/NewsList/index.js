import React from "react";
import { FileDownload } from "styled-icons/fa-solid/FileDownload";
import { Link } from 'gatsby'


import Box from "../../components/Box";
import NewsItem, { Date, Title, Icon } from "../../components/NewsItem";

function NewsList({ news, ...rest }) {
  return (
    <Box {...rest}>
      {news.map(({ id, date, title, url }) => (
        <NewsItem key={id} mb={3}>
             <Date className="date_formate"><Link to={`news/Newscategories_${id}`}>{date}</Link> </Date>
          {/* <Title color="secondary" as="a" href={url}> */}
          <Title className="title_formate" color="secondary" as="a" href={url}>
            {/* <Icon color="primary">
              <FileDownload size="1rem" />
            </Icon> */}
            <Link to={`news/Newscategories_${id}`}>{title}</Link> 
          </Title>
        </NewsItem>
      ))}
    </Box>
  );
}

export default NewsList;
