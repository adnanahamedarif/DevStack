import React from 'react';
import Banner from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <div className='flex grid-cols-2 items-center py-20 container mx-auto'>
          {/* left */}
            <div className='max-w-2xl'>
                <h2 className='text-6xl font-bold '>Build Your Ideal <br /><span className='bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent'>Development Stack</span></h2>


            <p className='mt-7 text-xl'>Explore frontend, backend, database, and tooling options,
                compare them side by side, and put together the stack that fits your
                next project.</p>


                <div className='mt-8 flex  items-center gap-4'>

                    <button className="rounded-xl bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 px-6 py-3 font-semibold text-white cursor-pointer">Explore Technologies</button>
                    <button className='rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 cursor-pointer '>Learn More</button>

                </div>

                
            </div>


            {/* Right */}

          <div className="w-full flex justify-end">
              <img src={Banner} alt="" />
          </div>

           

        </div>
    );
};

export default Hero;