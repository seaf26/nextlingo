import PageIllustration from "./components/page-illustration";
import Workflows from "./components/workflows";
import Cta from "./components/cta";
import { GoogleGeminiEffectDemo } from "./components/GoogleGeminiEffectDemo";
import { AnimatedPinDemo } from "./components/AnimatedPinDemo";
import { HeroParallax } from "./components/ui/hero-parallax";
import ContactPage from "./contact/ContactPage";
import { CardDemo } from "./components/AnmaitedCard";

const Home = () => {
  return (
    <div className="mx-auto">
      {/* <PageIllustration /> */}
      <ContactPage />
      <Workflows />
      <CardDemo/> 
      {/* <CardDemoGrid /> */}
      <AnimatedPinDemo />
      <Cta />

    </div>
  );
};



export default Home;