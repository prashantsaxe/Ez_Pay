"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";
import Image from 'next/image';

export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");

    return <div className=" flex justify-evenly bg-gradient-to-r from-green-400 via-teal-300 to-lime-300 ">
        <div className="flex justify-self-start">
            <Card title="Send">
                <div className="min-w-96  h-72 justify-start">
                    <div className="pt-8">
                    <TextInput placeholder={"Number"} label="Number" onChange={(value) => {
                        setNumber(value)
                    }} />
                    </div>

                    <div className="pt-8">
                    <TextInput placeholder={"Message"} label="Message" onChange={(value) => {
                        setNumber(value)
                    }} />
                    </div>

                    <div className="pt-8">
                    <TextInput placeholder={"Amount"} label="Amount" onChange={(value) => {
                        setAmount(value)
                    }} />
                    </div>
                    <div className="pt-10 flex justify-center">
                        <Button onClick={async () => {
                            await p2pTransfer(number, Number(amount) * 100)
                        }}>Send</Button>
                    </div>
                </div>
            </Card>
        </div>    
        <div className="pl-5 flex justify-end  bg-teal-300 ">
            <Image
                src="/p2p.jpg"  // Path to the image in the `public` directory
                alt="Description of image"
                width={800}   // Specify width
                height={500}  // Specify height
                className="rounded-lg shadow-lg"  // Tailwind CSS classes for styling
            />
        </div>
    </div>
}