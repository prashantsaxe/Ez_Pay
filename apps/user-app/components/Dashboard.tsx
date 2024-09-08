"use client"
import { Center } from '@repo/ui/center';
import Image from 'next/image';

export function Dashboard(){

    return <div>

        <div className=" flex justify-end  bg-gradient-to-r from-green-400 via-teal-300 to-lime-300  ">
            <Image
                src="/home.png"  // Path to the image in the `public` directory
                alt="Description of image"
                width={2000}   // Specify width
                height={300}  // Specify height
                className="rounded-lg shadow-lg"  // Tailwind CSS classes for styling
            />
        </div>
        <div className='p-5 pb-8 text-black text-8xl font-extrabold bg-clip-text'>
            <Center>
            Get Started
            </Center>
            
        </div>
        <div  className=' pb-9 flex justify-around'> 
            
            <span className='p-5  rounded-lg bg-green-300 text-xl font-semibold'> P2P Transfer</span>
            <span className='p-5  rounded-lg  bg-cyan-300'> Bank Transfer</span>
            <span className='p-5  rounded-lg  bg-yellow-700'> Transactions</span>
            
        </div>

    </div>
}
