import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative bg-primary overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-primary sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-serif font-bold text-secondary sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Elegance that</span>{' '}
                                <span className="block text-accent xl:inline">defines you</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Discover our handcrafted collection of premium jewelry. From timeless classics to modern statements, find the perfect piece to illuminate your style.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a href="/shop" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-accent hover:bg-accent-hover md:py-4 md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                                        Explore Now <ArrowRight className="ml-2" size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="h-56 w-full bg-rose-100 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center overflow-hidden">
                    {/* Placeholder for Hero Image - In a real app, this would be an <img> tag */}
                    <div className="text-accent/20 text-9xl font-serif opacity-50 select-none">
                        💎
                    </div>
                    {/* Decorative floral elements could go here */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
