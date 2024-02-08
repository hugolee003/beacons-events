import React from "react";
import Link from "next/link";

const Hero = () => {
	return (
		<div className='w-full h-[85vh] md:px-[80px] px-[20px] flex flex-col md:items-center justify-center'>
			<h1 className='md:text-6xl text-3xl text-white font-extrabold mb-5 md:text-center'>
				Welcome to the {" "}
				<span className='md:text-[#fdc56c] text-white'>Beacons Events</span>
			</h1>
			<p className='mb-2 md:text-center md:text-lg md:text-gray-100 text-white'>
			Heralding the truth of the kingdom of heaven to every generation thereby establishing a people who are spiritually inclined to take over the systems of the world till the kingdom of this world becomes the kingdom of our God
			</p>
			{/* <p className='mb-6 md:text-center md:text-lg md:text-gray-100 text-white'>
				Don't miss out on the memories - grab your tickets now!
			</p> */}
			<Link href='/register'>
				<button className='bg-white md:px-6 px-4 py-4 text-[#C07F00] rounded font-bold'>
					Get Started 
				</button>
			</Link>
		</div>
	);
};

export default Hero;
