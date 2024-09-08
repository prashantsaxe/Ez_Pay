"use client";
import React = require("react");
import { Button } from "./button";
import { AppbarItem } from "./AppbarItem"; // Use PascalCase for the component name

interface AppbarProps {
    user?: {
        name?: string | null;
    };
    onSignin: any;
    onSignout: any;
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return (
        <div className="flex justify-between border-b px-4 border-slate-500 bg-gradient-to-r from-green-600 via-teal-400 to-lime-400  shadow-xl p-3">
            <div className="flex flex-col justify-center font-mono italic text-3xl font-bold tracking-wide text-zinc-100 shadow-5xl pl-5">
                eZPay
            </div>
            <div className="flex justify-center">
               <div className="flex flex-col justify-center p-2">
                <AppbarItem href="/dashboard" title="Home" /> {/* Use the correct component name */}
                </div>
                <div className="flex flex-col justify-center p-2">
                <AppbarItem href="/transfer"  title="Transfer" /> {/* Use the correct component name */}
                </div>
                <div className="flex flex-col justify-center p-2">
                <AppbarItem href="/transactions"  title="Transaction" /> {/* Use the correct component name */}
                </div>
                <div className="flex flex-col justify-center ">
                <AppbarItem href="/p2p" title="p2p Transfer" /> {/* Use the correct component name */}
                </div>
            </div>   

            <div className="flex flex-col justify-self-end pt-2">
                <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
            </div>
        </div>
    );
}

