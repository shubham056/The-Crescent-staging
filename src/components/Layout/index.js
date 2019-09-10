import React from "react";
import PropTypes from "prop-types";
import { GridThemeProvider } from "styled-bootstrap-grid";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";

import theme from "../../theme";

import Header from "../Header";
import Footer from "../Footer";

import { GlobalStyle } from "./styles";

const gridTheme = {
  row: {
    padding: 16,
  },
  col: {
    padding: 16,
  },
  container: {
    padding: 16,
  },
};

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          nav {
            text
            slug
          }
        }
      }
    }
  `);

  const title = data.site.siteMetadata.title;
  const nav = data.site.siteMetadata.nav;

  return (
    <ThemeProvider theme={theme}>
      <GridThemeProvider gridTheme={gridTheme}>
        <>
          <GlobalStyle />
          <Header />
          <main>{children}</main>
          <Footer siteTitle={title} nav={nav} />
        </>
      </GridThemeProvider>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
