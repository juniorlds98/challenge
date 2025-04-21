import Footer from "./Footer"
import HeaderBootstrap from "./HeaderBootstrap"

const MainPage = ({ children }) => {
    return (
      <div>
        <HeaderBootstrap/>
        <main>
          {children}
        </main>
        <Footer/>
      </div>
    );
  };

export default MainPage;
