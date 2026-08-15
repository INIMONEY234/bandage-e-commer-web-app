// src/pages/HomePage.tsx

import { HeroGrid } from "../components/HeroGrid";
import { ProductList } from "../components/ProductList";
import { Services } from "../components/Services";
import { Posts } from "../components/Posts";
import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";

function HomePage() {
  return (
    <>
      <HeroGrid />

      <ProductList page="home" />

      <Services />

      <Posts />

      <Testimonials />

      <CTA />
    </>
  );
}

export default HomePage;