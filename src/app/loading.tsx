import Spinner from "@/components/loader";
import React from "react";

export default function loading() {
  return (
    <div className="grid grid-rows-[1fr_1fr_20px] items-center justify-items-center min-h-screen gap-16 ">
      <div className="row-2">
        <Spinner> Agatha Ambrose - Product Manager - Creative - </Spinner>;
      </div>
    </div>
  );
}
