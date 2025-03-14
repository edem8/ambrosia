import Spinner from "@/components/loader";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <div className="row-2">
        <Spinner className="  text-gray-600  ">
          {" "}
          Agatha Ambrose - Product Manager - Creative -
        </Spinner>
      </div>
    </div>
  );
}
