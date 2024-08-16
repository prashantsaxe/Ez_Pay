"use client"
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const AppbarItem = ({ href, title}: { href: string; title: string }) => {
    const router = useRouter();
    const pathname = usePathname();
    const selected = pathname === href;

    return (
        <div className="pt-5">
            <button
                type="button"
                className={`flex items-center justify-center space-x-2 bg-transparent  hover:bg-gray-900 focus:outline-gray-50:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-xl px-12 py-3 mb-2 shadow-sm ${selected ? "text-gray-800" : "text-slate-500"}`}
                onClick={() => router.push(href)}
            >
            {/* //     <span className="w-6 h-6">{icon}</span> */}
                <span>{title}</span>
            </button>
        </div>
    );
};
