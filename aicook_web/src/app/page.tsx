import { AnimatedWelcome } from "../components/animations/AnimatedWelcome";
import LandingPage from "../components/landing/LandingPage";

export default function HomePage() {
  return (
    <div>
      <AnimatedWelcome />
      <LandingPage />
    </div>
  );
}