import { AnimatedWelcome } from "@/components/animations";
import BotAndRecipes from "@/components/bot&recipes";
import LandingPage from "@/components/landing";
import Product from "@/components/product";

export default function HomePage() {
  return (
    <div>
      <AnimatedWelcome/>
      <LandingPage />
      <BotAndRecipes />
      <Product />
    </div>
  );
}