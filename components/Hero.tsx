import React from 'react'

const Hero = () => {
  return (
    <section
  className= "h-2xl overflow-hidden bg-[url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?fm=jpg)] bg-cover bg-top bg-no-repeat"
>
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-4xl font-bold text-white sm:text-3xl md:text-5xl">
        Discover Breathtaking Destinations
      </h2>

      <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-xl md:leading-relaxed">
        From tropical beaches to hidden mountain trails — plan your dream vacation with curated travel guides, expert tips, and more.
      </p>

      <div className="mt-4 sm:mt-8">
        <a
          href="#"
          className="inline-block bg-teal-600 px-12 py-4 text-sm font-medium text-white transition hover:bg-teal-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
        >
          Start Exploring
        </a>
      </div>
    </div>
  </div>
</section>

  )
}

export default Hero