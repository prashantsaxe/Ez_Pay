"use client";

import { ReactNode } from "react";
import React = require("react");

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className="text-white bg-green-900 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-md px-9 py-4 me-2 mb-2 shadow-xl ">
      {children}
    </button>

  );
};
