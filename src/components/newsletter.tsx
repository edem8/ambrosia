"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-xl p-0 border-none rounded-none w-[90%] md:w-[70%] sm:w-[90%]">
          <div className="relative flex flex-col items-center justify-center p-10 bg-[#f0efed] text-gray-800">
            <div className="w-full max-w-xl text-center space-y-6">
              <div className=" space-y-2 sm:space-y-3 mb-10">
                <p className="text-xs uppercase font-[Grotesk] tracking-wider text-gray-500 font-medium">
                  RECEIVE MY LATEST THOUGHTS
                </p>
                <h2 className=" sm:text-2xl font-[Bellefair] tracking-wider">
                  SIGN UP FOR THE NEWSLETTER
                </h2>
              </div>

              <div className="space-y-6 w-full">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Type in your email"
                    className="w-full py-3 bg-transparent text-2xl text-center font-[High-Summit] border-b border-gray-400 focus:border-gray-800 outline-none placeholder:text-gray-500 placeholder:italic placeholder:font-light"
                  />
                </div>

                <button className="w-full max-w-[120px] py-4 px-6 bg-[#3c3c3c] text-white uppercase text-sm tracking-wider font-medium hover:bg-gray-800 transition-colors">
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
