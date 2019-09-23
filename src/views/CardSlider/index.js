import React from "react";
import Slider from "react-slick";
import styled, { css } from "styled-components";

import { ChevronLeft } from "styled-icons/boxicons-regular/ChevronLeft";
import { ChevronRight } from "styled-icons/boxicons-regular/ChevronRight";

import Box from "../../components/Box";
import MediaCard from "../../components/MediaCard";

import mediaQuery from "../../utils/mediaQuery";

const icons = css`
  color: ${props => props.theme.colors.grays[1]};
  width: 24px;
  position: absolute;
  bottom: 0;
`;

const StyledLeft = styled(ChevronLeft)`
  ${icons};
  left: 10%;
  ${mediaQuery.minTablet} {
    left: 40%;
  }
`;

const StyledNext = styled(ChevronRight)`
  ${icons};
  right: 10%;
  ${mediaQuery.minTablet} {
    right: 40%;
  }
`;

const Dots = styled.div``;
const UL = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin: 3rem 0 0;
  padding: 0;
  justify-content: center;

  button {
    appearance: none;
    background-color: ${props => props.theme.colors.grays[1]};
    border: 0;
    border-radius: 100%;
    width: 12px;
    height: 12px;
    margin: 0 6px;
    padding: 0;
    overflow: hidden;
    outline: none;
    text-indent: 100px;
  }

  .slick-active button {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: <StyledLeft />,
  nextArrow: <StyledNext />,
  appendDots: dots => (
    <Dots>
      <UL>{dots}</UL>
    </Dots>
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function CardSlider({ onClick, data, ...rest }) {
  return (
    <Box {...rest} mr="-8px" ml="-8px">
      <Slider {...settings}>
        {data.map(({ src, title, desc, address, time, url, phone_no }) => (
          <MediaCard
            px={2}
            key={title}
            src={src}
            title={(title.length<17)?title.substring(0,17):title.substring(0,17)+"..."}
            desc={(desc.length<86) ? desc.substring(0,86) : desc.substring(0,86)+"..."}
            address={address}
            time={time}
            url={url}
            phone_no={phone_no}
            fulldesc={desc}
            fulltitle={title}
            onClick={onClick}
          />
        ))}
      </Slider>
    </Box>
  );
}

export default CardSlider;
