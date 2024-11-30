import FeaturedProducts from "./FeaturedProducts";
import HomeHero from "./HomeHero";

function Home() {
  document.title = "Home | Comfy";

  return (
    <>
      {/* hero */}
      <HomeHero />

      {/* featured products */}
      <FeaturedProducts />
    </>
  );
}

export default Home;
