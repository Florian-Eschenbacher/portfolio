import React from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import SEO from '../components/SEO';

const AboutPage = () => (
  <>
    <SEO title="About" />
    <h2>
      <FormattedMessage id="about title" />
    </h2>
    <p>
      <FormattedMessage id="about text" />
    </p>
  </>
);

export default injectIntl(AboutPage);
