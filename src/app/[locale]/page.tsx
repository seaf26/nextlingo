import PageIllustration from "../components/page-illustration";
import Workflows from "../components/workflows";
import Cta from "../components/cta";
import { GoogleGeminiEffectDemo } from "../components/GoogleGeminiEffectDemo";
import { BentoGridDemo } from "../components/BentoGridDemo";
import { AnimatedPinDemo } from "../components/AnimatedPinDemo";


export default function Home() {
  return (
    <div className="mx-auto">
      <PageIllustration />
      <GoogleGeminiEffectDemo />
      <Workflows />
      <BentoGridDemo />
      <AnimatedPinDemo />
      <Cta />
    </div>
  );
}
