import React from 'react'

import banner1 from '../assets/images/banner1.png'

const Hero = ({
  // Creating props (attributes)
  title = 'CalAsset Management Limited',
  subtitle = '',
}) => {
  return (
    <section className=" py-[1px] mb-4 relative">

      <div>
        <img
          className="object-cover w-full h-full "
          src={banner1}
          alt="React Jobs"
        />
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center absolute inset-0  justify-center"
      >
          <div className="absolute top-[400px] left-0 p-4">
            <h1 className="text-4xl font-serif font-extrabold text-[#f5a625] sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="my-4 text-xl text-white">
              {subtitle}
            </p>
          </div>
      </div>
    </section>
  )
}

export default Hero;



//className='w-full h-64 overflow-hidden'

{/* [#f9dc23] - Yellow*/}

{/* [#f5a625] - Orange */}

// Solid styles: border rounded-[20px] border-[#f5a625]