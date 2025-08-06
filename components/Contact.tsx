import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="space-y-4 md:space-y-8">
      <div className="max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Ready to Start Your Journey?
        </h2>

        <p className="mt-4 text-gray-700">
          Contact our travel experts today and let us help you plan the trip of a lifetime. Adventure, relaxation, and discovery await!
        </p>
      </div>

      <Image
        src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
        className="rounded"
        alt="Travel planning"
        width={267}
        height={160}
      />
    </div>
  </div>
</section>

  )
}

export default Contact