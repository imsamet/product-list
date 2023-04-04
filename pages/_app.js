import '../styles/globals.scss';
import ProjectLayout from '../components/layout';
import { Provider } from 'react-redux';
import store from '../store';
import { useState } from 'react';
import Router from "next/router";
import Loading from '../components/loading';

function MyApp({ Component, pageProps }) {
  const [isLoading, setLoading] = useState(false);
  let control = true
  const loading = () => {
    control = false
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }
  control && loading()
  return (
    <Provider store={store}>
      <Loading isOpen={isLoading} />
      <ProjectLayout>
        <Component {...pageProps} />
      </ProjectLayout>
    </Provider>
  );
}

export default MyApp;
