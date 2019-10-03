import React, { useState } from "react";
import styled from "styled-components";

import Box from "../Box";
import { date, title, content, wrap } from "./styles";

const StyledWrap = styled(Box)`${wrap}`;
const StyledDate = styled(Box)`${date}`;
const StyledTitle = styled(Box)`${title}`;
const StyledContent = styled(Box)`${content}`;

function Date({ date, ...rest }) {
  return <StyledDate {...rest}>{date}</StyledDate>;
}

function Title({ title, ...rest }) {
  return <StyledTitle {...rest}>{title}</StyledTitle>;
}

function Content({ content, active, ...rest }) {
  return (
    <>
      {active && (
        <StyledContent
          dangerouslySetInnerHTML={{ __html: content }}
          {...rest}
        />
      )}
    </>
  );
}

function AccordionItem({ date, title, content, ...rest }) {
  const [active, set] = useState(false);
  return (
    <StyledWrap {...rest} onClick={() => set(!active)}>
      <Box width="20%" className='smblock'>
        <Date date={date} />
      </Box>
      <Box width="80%" className='lgblock' className="fix_accordian_items">
        <Title active={active} title={title} />
        <Content active={active} content={content} />
      </Box>
    </StyledWrap>
  );
}

export default AccordionItem;
