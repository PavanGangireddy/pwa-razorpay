import React from 'react';
import { FormattedMessage } from 'react-intl';

import HeaderLink from './HeaderLink';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HeaderLink to="/payment">Pay 400/-</HeaderLink>
      </div>
    );
  }
}

export default HomePage;
