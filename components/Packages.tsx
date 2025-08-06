import Image from 'next/image'
import React from 'react'

const Packages = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="space-y-4 md:space-y-8">
      <div className="max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Explore Top Destinations
        </h2>

        <p className="mt-4 text-gray-700">
          From the sun-kissed beaches of Bali to the historic streets of Rome, discover the most popular destinations handpicked for every kind of traveler.
        </p>
      </div>

      <Image
        src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
        className="rounded"
        alt="Top destinations collage"
        width={267}
        height={160}
      />
    </div>
  </div>
</section>

  )
}

export default Packages