"use client";

import { useEffect, useState } from "react";
import Portfolio from "./Portfolio";

export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPortfolio(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return <div>{showPortfolio && <Portfolio />}</div>;
}
