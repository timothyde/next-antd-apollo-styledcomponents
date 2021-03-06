import App, { Container } from 'next/app';
import '../styles/index.less';
import React from 'react';
import withApolloClient from '../utils/with-apollo-client';
import { ApolloProvider } from 'react-apollo';

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
