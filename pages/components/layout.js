
import Header from "./header";
import Footer from "./footer";
Footer;
const layout = ({child}) => {
  return (
    <>
      <Header />

      <main>{child}</main>

      <Footer />
    </>
  );
};

export default layout;
