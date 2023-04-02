import Layout from '../components/layout';
import '../styles/globals.scss';
import ProjectLayout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <ProjectLayout>
      <Component {...pageProps} />
    </ProjectLayout>
  );
}

export default MyApp;
