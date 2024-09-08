"use client";

import { Button } from "@repo/ui/button";
import updation from "../../../lib/actions/webhookHandler";
import { Center } from "@repo/ui/center";
import { useState } from "react";
import Image from 'next/image';

export default function TransactionPage() {
  const redirectUrl = "http://localhost:3001/transfer";
  const [isLoading, setLoading] = useState(false);

  return (
    <div className=" flex flex-col items-center min-h-screen w-full bg-blue-500">
      <div className="bg-red-500 text-white p-4 rounded-md mb-8  flex justify-center w-2/6 items-center text-9xl ">
        HDFC
      </div>
      <div className="flex justify-center w-90 h-90 bg-red-700">
      <Image
                src="/hdfc.png"  // Path to the image in the `public` directory
                alt="Description of image"
                width={800}   // Specify width
                height={900}  // Specify height
                className="rounded-lg shadow-lg"  // Tailwind CSS classes for styling
            />
        </div>
      <div className="flex">
        <Button
          onClick={async () => {
            await updation();
            setLoading(true);
            setTimeout(() => {
              window.location.href = redirectUrl;
            }, 2000);
            setLoading(false);
          }}
        >
          {isLoading ? "Redirecting..." : "Confirm"}
        </Button>
      </div>
    </div>
  );
}
