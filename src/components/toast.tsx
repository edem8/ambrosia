"use client";

import { X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { toast as sonnerToast } from "sonner";

interface ToastProps {
  id: string | number;
  title: string;
  description: string;
}

export default function toast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom((id) => (
    <Toast id={id} title={toast.title} description={toast.description} />
  ));
}

function Toast(props: ToastProps) {
  const { title, description, id } = props;

  return (
    <div className="flex gap-2 rounded bg-white shadow-lg ring-1 ring-black/5 w-full md:max-w-[364px] items-center p-4">
      <Image
        src="/assets/images/amber.jpg"
        alt="amber"
        width={100}
        height={100}
      />
      <div className="flex flex-1 items-center">
        <div className="w-full">
          <X
            size={20}
            onClick={() => sonnerToast.dismiss(id)}
            className="  hover:text-gray-300 cursor-pointer text-gray-400 place-self-end"
          />
          <p className="text-xs tracking-wider font-medium text-gray-900">
            {title}
          </p>
          <p className="mt-1 text-xs leading-4 tracking-wide text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
