import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import Destintions from "@/components/Destintions";
import Packages from "@/components/Packages";
import Contact from "@/components/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
              Plan your next adventure and
              <strong className="text-teal-600"> explore the world</strong>
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
              Find unforgettable destinations, personalized itineraries, and
              tips from travel experts — all in one place. Your journey begins
              here.
            </p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <Link
                className="inline-block rounded border border-teal-600 bg-teal-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-teal-700"
                href="#"
              >
                Start Your Journey
              </Link>

              <Link
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                href="#"
              >
                Explore Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Destintions />
      <Packages />
      <Contact />
    </>
  );
};

export default HomePage;
