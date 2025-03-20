import Spinner from "@/components/loader";
import PortfolioPage from "@/components/layout/Onboarding";
import dynamic from "next/dynamic";

const Onboarding = dynamic(() => import("../components/layout/Onboarding"), {
  loading: () => (
    <Spinner> Agatha Ambrose - Product Manager - Creative - </Spinner>
  ),
});

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_1fr_20px] items-center justify-items-center min-h-screen gap-16 ">
      <Onboarding />
      <div className="row-2"></div>
    </div>
  );
}
