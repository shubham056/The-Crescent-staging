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
  :focus{outline:none;}
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
    color: #ffffff;
    text-align: left;
    width: 24.9%;
  }
  .RRT__panel.panel table th a,
  .RRT__panel.panel table td a{color:#fff}
  
  .RRT__panel.panel table tr:nth-child(odd) {
    background: #307EAF;
  }
  
  .RRT__panel.panel table tr:nth-child(even) {
    background: #307EAF;
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
  .styles_modal__gNwvD .sc-htpNat.jTcoEK.text-area .inner-txt .parking_button
  {
    margin-left:0; 
    margin-right:0;
    max-width:312px;
    width:100%;
    text-align:center;
    font-size:16px;
    line-height:24px;
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
.mobile_accordian .smblock{display:none;}
.mobile_accordian .lgblock{width:100%;}
.mobile_accordian .lgblock table{width:100%;}

.mobile_accordian .lgblock table tr th{padding:15px 5px; text-align:left; border-bottom:1px solid #000; color:#000;}
.mobile_accordian .lgblock table tr td{padding:15px 5px; text-align:left; border-bottom:1px solid #000; color:#000;}
.mobile_accordian .lgblock .AccordionItem__StyledContent-iESnqx{padding-top:20px;}


.mobile_accordian > .lgblock div.active{background:#307EAF !important; color:#fff;}
.mobile_accordian > .lgblock div.active table tr th{border-color:#fff}
.mobile_accordian > .lgblock div.active table tr td{border-color:#fff}
.mobile_accordian > .lgblock div:nth-child(odd) {
  background: #F0F0F0;
}
.mobile_accordian > .lgblock{padding:15px 8px; margin:0;}
.mobile_accordian > .lgblock:nth-child(even) {
  background: #ffffff;
}
.spacing_none{
  margin:0;
  padding:0;
}
.content_new{
  padding-bottom:20px;
}
#panel-0,#panel-1,#panel-2,#panel-3{
  background:#ffffff !important; color:#fff;
}

.gal_container .gal_card{width:20%;} 
.gal_container .gal_card .gal_card_img{width:100%;} 

.map_search_field {
  width: 94%;
  height: 65px;
  padding-left: 16px;
  margin-top: 2px;
  position: absolute;
  z-index: 1;
  left: 586px;
  top:105px;
  border: 3px solid #F0F0F0;
  font-size: 1.25rem;
  padding: 10px 40px;
  background-repeat: no-repeat;
  background-position: 12px 19px!important;
  background-size: 19px!important;
}

.int_search_box{visibility: hidden;}
.about-content{padding:50px !important;}
.about-content h2{font-size:27px; margin-bottom:15px}
#community,#management,#sustainability{scroll-behavior: smooth;}
.parallax_effect{background-attachment: fixed;}
.dyne_with_us{width:100%; list-style:none; margin:0; padding:0;}
.dyne_with_us li{width: 100%;
  float: left;
  padding-bottom: 10px;
  color: #3F4D55;
  white-space: normal;
  word-break: break-all; padding-right:30px}

.dyne_with_us li img{float:left; margin-right:5px; width:25px;}
.dyne_with_us li a.newlink{cursor:pointer;}
.vertical-tabs .rwt__tablist button {
  border-width: 1px;
  border-style: solid;
  border-color: #C9C9C9;
  color: #307EAF;
  width: 100%;
  cursor: pointer;
  display: inline-block;
  border-right: 1px solid #C9C9C9;
}
.vertical-tabs .rwt__tablist button[aria-selected="true"]{color:#fff; background: #307EAF;border:1px solid #307EAF;}

.vertical-tabs .rwt__tablist[aria-orientation="vertical"] .rwt__tab[aria-selected="true"]:after {

    border-right: 0;
}

.photo_video .gallery_div .ReactModelImage{width:100%; height:300px; object-fit:cover;}


.mobile-tabs{
  display:none!important;
}
.cp_desc ul li{margin-bottom:20px;}


.blue_button_new {
	border-width: 3px;
	border-style: solid;
	border-color: rgb(201, 201, 201);
	color: rgb(48, 126, 175);
	width: 100%;
	padding: 16px 64px;
	margin: 8px 0px;
	cursor: pointer;
	display: inline-block;
	font-weight: 700;
	text-align: center;
  text-decoration: none;
  width: auto;
    margin: 0 16px;
}

body.modal-open .header_fixed_new{position:static;}

body.modal-open  .react-images__view-wrapper .react-images__view img{float:none; margin:0 auto;}

.para_button{
  -webkit-transition: all .7s ease-out 0s;
  -moz-transition: all .7s ease-out 0s;
  -ms-transition: all .7s ease-out 0s;
  -o-transition: all .7s ease-out 0s;
  transition: all .7s ease-out 0s;
}
html{scroll-behavior: smooth; -webkit-scroll-behavior: smooth;}




@media only screen and (max-width:767px){
  .cp_title{
    margin-top: 90px;
  }
  .vertical-tabs{
    display:none!important;
  }
  .mobile-tabs{
    display:block!important;
  }
  .map_search_field {
    width: 91%;
    left: 17px;
    top: 569px; 
  }
  .gal_container_heading h2{margin: 25px 0 0 0; padding: 0; font-size: 29px;}
  .gal_container .gal_card{width:100%;} 
.newlink{white-space: normal;
  word-break: break-all;}
.img_new_box{height:340px;}
.styles_modal__gNwvD{width:100%;}
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
