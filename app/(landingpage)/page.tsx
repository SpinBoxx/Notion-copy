import Footer from "./components/footer";
import Header from "./components/header";
import Heroes from "./components/heroes";

const LandingPage = () => {
  return (
    <div className="flex min-h-full flex-col">
      <div className="flex flex-1 flex-col items-center justify-center text-center md:justify-start">
        <Header />
        <Heroes />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
