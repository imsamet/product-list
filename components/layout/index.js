import Checkout from '../checkout';
import Nav from '../nav';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <section className="section">
        <div className="container">
          <div className="row">
            {children}
            <Checkout />
          </div>
        </div>
      </section>
    </>
  );
};
export default Layout;
