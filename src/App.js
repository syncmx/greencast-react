import { Banner, Blog, Footer, Gallery, Header, Home, Info } from "./components";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Banner />
      <Home />
      <Info />
      <Gallery />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
