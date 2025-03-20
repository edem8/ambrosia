import Portfolio from "@/components/layout/Onboarding";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_1fr_20px] items-center justify-items-center min-h-screen gap-16 ">
      <Portfolio />
      <div className="row-2"></div>
    </div>
  );
}
