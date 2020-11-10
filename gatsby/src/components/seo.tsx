/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql, PageProps } from 'gatsby';

type SeoProps = {
  title: string;
};

function SEO({ title }: SeoProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ''}>
      <html lang="en" />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta
        property="og:description"
        content={site.siteMetadata.description}
        key="ogdesc"
      />
    </Helmet>
  );
}

export default SEO;
