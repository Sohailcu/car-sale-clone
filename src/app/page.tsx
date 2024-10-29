import Hero from "./Components/Hero";
import FeaturesCars from "./Components/FeaturesCars";
import MakeCarsLogo from "./Components/MakeCarsLogo";
import CarsCategories from "./Components/CarsCategories";


export default function Home() {
  return (
   <div>
    <Hero />

    <FeaturesCars />

    <MakeCarsLogo />

    <CarsCategories />
      
    </div>
  );
}