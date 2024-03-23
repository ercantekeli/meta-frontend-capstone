import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <main data-testid="main-content" className="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
