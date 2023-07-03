import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Content from "./components/Content";

function App() {
  return (
    <body>
      <Header />
      <div id="main">
        <Content />
        <Nav />
      </div>
      <Footer />
    </body>
  );
}

export default App;
