module.exports = {
  siteMetadata: {
      title: `rodrigo-daud-site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
      plugins: [ `gatsby-remark-autolink-headers`,
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 1280,
          },
        },
      ],
    },
    },"gatsby-plugin-styled-components", "gatsby-plugin-root-import", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-SGN24MEFZ7"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
  }]
};