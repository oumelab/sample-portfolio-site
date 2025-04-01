import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import Social from "./components/social";

export default function App() {
  return (
    <div className="w-full min-h-dvh">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Social />
      <Footer />
    </div>
  )
}