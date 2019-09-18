module.exports = {
  siteMetadata: {
    title: `The Crescent`,
    description: `An address of distinction`,
    author: `@leomanlapera`,
    nav: [
      {
        text: "About",
        slug: "about",
      },
      {
        text: "Amenities",
        slug: "amenities",
      },
      {
        text: "Leasing",
        slug: "leasing",
      },
      {
        text: "Location",
        slug: "location",
      },
      {
        text: "Gallery",
        slug: "gallery",
      },
      {
        text: "News",
        slug: "news-2017",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#307EAF`,
        theme_color: `#307EAF`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Archivo:400,700"],
        },
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://157.245.132.14:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`galleries`,`dinewithuses`,`retalandhospitalities`,`news2017S`,`news`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
  ],
};
