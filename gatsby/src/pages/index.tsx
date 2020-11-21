import React from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <div>
      <SEO title="Home" />
      <h2>
        <FormattedMessage id="home title" />
      </h2>
      <p>
        <FormattedMessage id="home text" />
      </p>
    </div>
  </Layout>
);

export default injectIntl(IndexPage);
