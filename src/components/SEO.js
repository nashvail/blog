// https://www.gatsbyjs.org/docs/add-seo-component/
import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const query = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
        author
        description
        siteUrl
        keywords
        social {
          twitter
        }
      }
    }
  }
`

export default function SEO({
  meta,
  image,
  title,
  description,
  slug,
  keywords,
  lang = "en",
}) {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const { siteMetadata } = data.site
        const metaDescription = description || siteMetadata.description
        const metaKeywords = siteMetadata.keywords.concat(keywords)

        // Don't really understand this line yet
        const metaImage = image ? `${siteMetadata.siteUrl}/${image}` : null
        const url = `${siteMetadata.siteUrl}${slug}`

        return (
          <Helmet
            htmlAttributes={{ lang }}
            {...(title
              ? {
                  titleTemplate: `%s — ${siteMetadata.title}`,
                  title,
                }
              : {
                  title: `${siteMetadata.title} — A blog by Nash Vail`,
                })}
            meta={[
              {
                name: "description",
                content: metaDescription,
              },
              {
                propperty: "og:url",
                content: url,
              },
              {
                property: "og:title",
                content: title || siteMetadata.title,
              },
              {
                property: "og:description",
                content: metaDescription,
              },
              {
                name: "twitter:card",
                content: "summary",
              },
              {
                name: "twitter:creator",
                content: siteMetadata.social.twitter,
              },
              {
                name: "twitter:title",
                content: title || siteMetadata.title,
              },
              {
                name: "twitter:description",
                content: metaDescription,
              },
              {
                name: "keywords",
                content: metaKeywords
              }
            ]
              .concat(
                metaImage
                  ? [
                      {
                        property: "og:image",
                        content: metaImage,
                      },
                      {
                        name: "twitter:image",
                        content: metaImage,
                      },
                    ]
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  meta: [],
  title: "",
  slug: "",
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.array,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
}
