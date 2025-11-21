import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import CountdownTimer from '../components/CountdownTimer';
import Newsletter from '../components/Newsletter';

const Home = () => {
    const featuredProducts = [
        { id: 1, name: 'Eternal Rose Ring', category: 'Rings', price: 129 },
        { id: 2, name: 'Sapphire Drop Earrings', category: 'Earrings', price: 249 },
        { id: 3, name: 'Gold Chain Necklace', category: 'Necklaces', price: 189 },
        { id: 4, name: 'Diamond Tennis Bracelet', category: 'Bracelets', price: 499 },
    ];

    // Set countdown target to 3 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    return (
        <div className="bg-soft-white">
            <Hero />

            {/* Featured Products Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-secondary">Featured Collection</h2>
                    <p className="mt-4 text-gray-500">Handpicked pieces that radiate elegance and charm.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Big Offer Section */}
            <section className="bg-rose-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                        <h2 className="text-4xl font-serif font-bold text-secondary mb-4">
                            Big Offer Sale!
                        </h2>
                        <p className="text-xl text-gray-600 mb-6">
                            Get up to 50% off on our exclusive wedding collection. Limited time only.
                        </p>
                        <button className="px-8 py-3 bg-accent text-white rounded-full hover:bg-accent-hover transition-colors shadow-lg">
                            Shop the Sale
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-rose-100">
                            <h3 className="text-center text-secondary font-serif mb-4">Offer Ends In:</h3>
                            <CountdownTimer targetDate={targetDate} />
                        </div>
                    </div>
                </div>
            </section>

            <Newsletter />
        </div>
    );
};

export default Home;
