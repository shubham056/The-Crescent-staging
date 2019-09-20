import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    color: ${props => props.theme.colors.secondary};
    font-family: "Archivo", sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    margin: 0;
  }

  a {
    color: #3e4d55;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  /* Slick */
  .slick-list,
  .slick-slider,
  .slick-track {
    position: relative;
    display: block;
  }

  .slick-loading .slick-slide,
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slider {
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .slick-list:focus {
    outline: 0;
  }

  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-list,
  .slick-slider .slick-track {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    top: 0;
    left: 0;
  }

  .slick-track:after,
  .slick-track:before {
    display: table;
    content: "";
  }

  .slick-track:after {
    clear: both;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }

  [dir="rtl"] .slick-slide {
    float: right;
  }

  .slick-slide img {
    display: block;
  }
  
  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
  
  .slick-arrow.slick-hidden {
    display: none;
  }
  .ReactModelImage{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 280px;
  }
  .active{
    color: #307EAF;
  }
  .styles_modal__gNwvD{
   max-width: initial;
  }
  
  .RRT__container .RRT__tabs .tab.RRT__tab--selected{background:#307EAF;}
  .RRT__container .RRT__tabs .tab {
    background-color: #A7A9AC;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 24px;
    color: #FFFFFF;
    line-height: normal;
    text-transform: uppercase;
    font-weight: 600;
    width: 25%;
  }
  
  .RRT__container .RRT__panel.panel {
    margin: 0;
    padding: 0;
    border: 0;
  }
  
  .RRT__panel.panel table {
    width: 100%;
  }
  
  .RRT__panel.panel table th,
  .RRT__panel.panel table td {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 16px;
    padding-bottom: 16px;
    color: #3F4D55;
    text-align: left;
    width: 24.9%;
  }
  
  .RRT__panel.panel table tr:nth-child(odd) {
    background: #F0F0F0;
  }
  
  .RRT__panel.panel table tr:nth-child(even) {
    background: #ffffff;
  }
  
  .RRT__panel.panel table {
    border-spacing: 1px;
  }
  
  .styles_modal__gNwvD {
    padding: 0;
  }
  
  .styles_modal__gNwvD .sc-htpNat.jTcoEK {
    padding-left: 0;
    position: relative;
  }
  
  .styles_modal__gNwvD .sc-htpNat.jTcoEK.text-area .inner-txt {
    position: relative;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
  }
  
  .styles_modal__gNwvD .sc-htpNat.jTcoEK.text-area .inner-txt p {
    padding-bottom: 10px
  }
  
  .styles_modal__gNwvD .sc-htpNat.jTcoEK.text-area .inner-txt p img.small_icons{float: left;
  margin-right: 5px;
  width: 20px;
  margin-top: 3px;}


  .styles_modal__gNwvD .sc-htpNat.jTcoEK .inner-txt h2 {
    color: #307EAF
  }
  
  .styles_modal__gNwvD .sc-htpNat.jTcoEK.text-area {
    padding: 0 30px;
  }
  .mobile_accordian{display:none;}
.mobile_accordian .Box-jLJQJw.bsqsrn{display:none;}
.mobile_accordian .Box-jLJQJw.eTtlmG{width:100%;}
.mobile_accordian .Box-jLJQJw.eTtlmG table{width:100%;}

.mobile_accordian .Box-jLJQJw.eTtlmG table tr th{padding:15px 5px; text-align:left; border-bottom:1px solid grey}
.mobile_accordian .Box-jLJQJw.eTtlmG table tr td{padding:15px 5px; text-align:left; border-bottom:1px solid grey}
.mobile_accordian .Box-jLJQJw.eTtlmG .AccordionItem__StyledContent-iESnqx{padding-top:20px;}


.mobile_accordian > .Box-jLJQJw.active{background:#307EAF !important; color:#fff;}
.mobile_accordian > .Box-jLJQJw.active table tr th{border-color:#fff}
.mobile_accordian > .Box-jLJQJw.active table tr td{border-color:#fff}
.mobile_accordian > .Box-jLJQJw:nth-child(odd) {
  background: #F0F0F0;
}
.mobile_accordian > .Box-jLJQJw{padding:15px 8px; margin:0;}
.mobile_accordian > .Box-jLJQJw:nth-child(even) {
  background: #ffffff;
}




@media only screen and (max-width:767px){

.RRT__container{display:none;}
.mobile_accordian{display:block}

.styles_modal__gNwvD .sc-htpNat.jTcoEK.text-area .inner-txt {
  position: static;
  width: 100%;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  max-width: 100%;
}
.styles_modal__gNwvD .sc-htpNat.jTcoEK.text-area {
  padding: 0 15px;
  width: 100%;
  max-width: 100%;
  float: left;
}
.sc-bwzfXH.fRvTYv{display:inline-block}
.styles_modal__gNwvD .sc-htpNat.jTcoEK {
  padding: 0;
  margin-bottom: 20px;
  width: 100%;
  max-width: 100%;
}
}
`;
