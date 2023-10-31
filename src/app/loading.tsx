import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center">
      <Image
        width={150}
        height={150}
        src="spinner.svg"
        alt="Loading..."
        className=""
      />
    </div>
  );
}
