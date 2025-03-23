import PageIllustration from "./components/page-illustration";
import Workflows from "./components/workflows";
import Cta from "./components/cta";
import { GoogleGeminiEffectDemo } from "./components/GoogleGeminiEffectDemo";
import { AnimatedPinDemo } from "./components/AnimatedPinDemo";
import { HeroParallax } from "./components/ui/hero-parallax";
import ContactPage from "./contact/ContactPage";
import { CardDemo } from "./components/AnmaitedCard";
import FeaturesSectionDemo from "./components/features-section-demo-3";

const Home = () => {
  return (
    <div className="mx-auto" dir="rtl"> {/* Add dir="rtl" */}
      {/* <PageIllustration /> */}
      <ContactPage />
      <Workflows />
      <CardDemo/> 
      {/* <CardDemoGrid /> */}
      {/* <AnimatedPinDemo /> */}
      <FeaturesSectionDemo/>
      <Cta />

    </div>
  );
};



export default Home;