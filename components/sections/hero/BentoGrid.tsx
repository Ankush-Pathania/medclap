import StrategyCard from "./bento/StrategyCard";
import ShowcaseCard from "./bento/ShowcaseCard";
import TrustStatCard from "./bento/TrustStatCard";
import HealthcareCard from "./bento/HealthcareCard";

export default function BentoGrid() {
  return (
    <div className="bento-grid mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
      <StrategyCard />
      <ShowcaseCard />
      <TrustStatCard />
      <HealthcareCard />
    </div>
  );
}
