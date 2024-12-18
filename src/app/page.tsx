import BMICalculator from "@/components/cal";
import Card from "@/components/card";
import FoodPortions from "@/components/foodportions";
import Footer from "@/components/footer";
import Welcome from "@/components/welcome";
import Manager from "@/components/manager";
import StrategyPage from "@/components/strategy";
import Card1 from "@/components/Card1";
import NutritionConsultationForm from "@/components/NutritionConsultationForm";

export default function Main() {
  return (

    <>
      <Welcome />
      <BMICalculator />
      <FoodPortions />
      <NutritionConsultationForm/>
      <Card1 />
      <Card />
      <StrategyPage />
      <Manager />
      <Footer />
    </>
  )
}
