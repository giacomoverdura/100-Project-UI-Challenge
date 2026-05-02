import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Role from "./components/Role";
import FeaturedJobs from "./components/FeatureJobs";
import Categories from "./components/Categories";
import HowItWorks from "./components/HowItWorks";

export default function JobBoard() {
  return (
    <>
      <Navbar />
      <Hero />
      <Role />
      <Categories />
      <FeaturedJobs />
      <HowItWorks />
    </>
  );
}